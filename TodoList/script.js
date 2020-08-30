let tasks = []

function task_done(index) {
    tasks.splice(index, 1);
    setTimeout(update, 1000);
    // update();
}

function update() {
    let new_html = "";
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i])
            new_html += `
        <div class="row ml-5">
            <div class="input-group mb-3 col-5">
                <div class="input-group-prepend">
                    <div class="input-group-text bg-secondary">
                        <input type="checkbox" onclick="task_done('`+ i + `')">
                    </div>
                </div>
                <input type="text" value="`+ tasks[i] + `" class="form-control bg-white" disabled>
            </div>
        </div>`;
    }
    document.getElementById("free-space").innerHTML = new_html;
}

function new_task() {
    tasks.push(document.getElementById("task").value);
    update();
    document.getElementById("task").value = "";
}