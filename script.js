document.getElementById("copyButton").addEventListener("click", function() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const copyMessage = document.getElementById("copyMessage");
        copyMessage.style.display = "block";
        
        // Masquer le message après 2 secondes
        setTimeout(() => {
            copyMessage.style.display = "none";
        }, 2000);
    }).catch(err => {
        console.error("Erreur lors de la copie du lien : ", err);
    });
});
