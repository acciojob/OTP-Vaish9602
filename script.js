const codes = document.querySelectorAll('.code');

        
        codes[0].focus();

        codes.forEach((code, index) => {

            code.addEventListener('input', (e) => {
                const value = e.target.value;

                // allow only digits
                if (!/^[0-9]$/.test(value)) {
                    e.target.value = "";
                    return;
                }

                // move to next input
                if (value && index < codes.length - 1) {
                    codes[index + 1].focus();
                }
            });

            code.addEventListener('keydown', (e) => {
                if (e.key === "Backspace") {

                    if (code.value === "" && index > 0) {
                        codes[index - 1].focus();
                    }
                }
            });

        });