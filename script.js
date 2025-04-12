document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inspectionForm');
    if (!form) {
        console.error('❌ Form not found!');
        return;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyH306qIJcT5yuSDmH1_dRKron_u0It-zk2YlqJ2Z_a6jLavF63N9GQxLvnQ54LBjhxzg/exec';

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // ⛔️ Stop the page from refreshing

        const formData = new FormData(form);

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('✅ Form submitted successfully!');
                form.reset();
            } else {
                alert('❌ Submission failed: ' + response.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('⚠️ Network or server error.');
        }
    });
});