$(document).ready(function () {
    let counters = [0, 0, 0]; // Adjust the size based on the number of counters

    // Update the counter display
    function updateCounter(index) {
        $(`#counter${index + 1}`).text(counters[index]);
    }

    // Increment counter
    $(".increment").click(function () {
        let index = $(this).data("index");
        counters[index]++;
        updateCounter(index);
    });

    // Decrement counter
    $(".decrement").click(function () {
        let index = $(this).data("index");
        if (counters[index] > 0) {
            counters[index]--;
            updateCounter(index);
        }
    });
});