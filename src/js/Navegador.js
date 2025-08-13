document.getElementById("otros").addEventListener("change", function() {
        if (this.value) {
            window.location.href = this.value;
        }
    });