document.addEventListener("DOMContentLoaded", function() {
    // 1. Initialize CodeMirror
    var codeArea = document.getElementById("python-code");
    var editor = CodeMirror.fromTextArea(codeArea, {
        mode: "python",
        theme: "material-darker",
        lineNumbers: true,
        indentUnit: 4,
        matchBrackets: true,
        viewportMargin: Infinity
    });

    // 2. Setup DOM elements
    var outputConsole = document.getElementById("output-console");
    var runBtn = document.getElementById("run-btn");
    var runStatus = document.getElementById("run-status");

    // 3. Define output function for Skulpt (where print() statements go)
    function outf(text) {
        outputConsole.appendChild(document.createTextNode(text));
    }

    // 4. Define builtinRead function for Skulpt
    function builtinRead(x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
            throw "File not found: '" + x + "'";
        }
        return Sk.builtinFiles["files"][x];
    }

    // 5. Hook up the Run button
    runBtn.addEventListener("click", function() {
        var prog = editor.getValue();
        outputConsole.textContent = '';
        runStatus.innerText = "Running...";
        runStatus.style.color = "var(--secondary)"; // Yellow while running

        Sk.pre = "output-console";
        Sk.configure({
            output: outf,
            read: builtinRead,
            __future__: Sk.python3
        });

        // Run the code asynchronously
        var myPromise = Sk.misceval.asyncToPromise(function() {
            return Sk.importMainWithBody("<stdin>", false, prog, true);
        });

        myPromise.then(function(mod) {
            runStatus.innerText = "Success";
            runStatus.style.color = "var(--primary)"; // Green on success
        }, function(err) {
            runStatus.innerText = "Error";
            runStatus.style.color = "var(--error)"; // Red on error
            outputConsole.textContent = err.toString();
        });
    });
    
    // Add custom styles for the editor container to fit our design
    var cmEl = document.querySelector('.CodeMirror');
    if (cmEl) {
        cmEl.style.borderRadius = "var(--radius-md)";
        cmEl.style.fontFamily = "var(--font-label-code)";
        cmEl.style.fontSize = "14px";
    }
});
