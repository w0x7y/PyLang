function colorizePath() {
    // Collect all the nodes sequentially
    const nodes = document.querySelectorAll('.path-node');
    
    let completedCount = 0; // Track how many tasks are completed
    const totalCount = nodes.length; // Total number of tasks
    
    nodes.forEach((node, index) => {
        // Read the exact material icon text inside the current node
        const iconSpan = node.querySelector('.material-symbols-outlined');
        const iconName = iconSpan ? iconSpan.textContent.trim().toLowerCase() : '';
        
        // Find the segment directly LEADING INTO this node
        const segment = document.getElementById(`segment-${index}`);
        
        // 1. Colorize the path line segments
        if (segment) {
            if (iconName === 'check') {
                segment.classList.add('line-completed');
            } else if (iconName === 'lock_open') {
                segment.classList.add('line-active');
            } else if (iconName === 'lock') {
                segment.classList.add('line-locked');
            }
        }
        
        // 2. Colorize the node squares themselves & increment completed counter
        if (iconName === 'check') {
            node.classList.add('node-completed');
            completedCount++; // Add to our completed tasks count
        } else if (iconName === 'lock_open') {
            node.classList.add('node-active');
        } else if (iconName === 'lock') {
            node.classList.add('node-locked');
        }
        
        // Final trailing line segment styling rules (the line after the final node)
        if (index === nodes.length - 1) {
            const finalSegment = document.getElementById(`segment-${index + 1}`);
            if (finalSegment) {
                if (iconName === 'check') {
                    finalSegment.classList.add('line-completed');
                } else {
                    finalSegment.classList.add('line-locked');
                }
            }
        }
    });

    // 3. DYNAMIC PROGRESS BAR CALCULATION
    updateProgressBar(completedCount, totalCount);
}

function updateProgressBar(completed, total) {
    const progressBarFill = document.getElementById('unit-progress');
    
    if (progressBarFill && total > 0) {
        // Calculate the percentage of completed tasks
        const percentage = (completed / total) * 100;
        
        // Update the CSS width property dynamically
        progressBarFill.style.width = `${percentage}%`;
    }
}

function initLearnPage() {
    colorizePath();
}

// SPA-loaded fragments are inserted after DOMContentLoaded has already fired.
if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initLearnPage);
} else {
    initLearnPage();
}
