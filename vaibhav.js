
        function showContent(id) {
            document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
            document.getElementById(id).style.display = 'block';
        }

        function submitForm(event) {
            event.preventDefault();
            document.getElementById('response-message').style.display = 'block';
            document.getElementById('queryForm').reset();
            setTimeout(() => {
                document.getElementById('response-message').style.display = 'none';
            }, 3000);
        }
    