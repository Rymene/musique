var chatInterval;
var messages = [
    { user: 3, text: "Les gars, j'ai découvert une dinguerie !!! Travis Scott avec son morceau goosebumps, le son est trop lourd." },
    { user: 3, text: "D’habitude je préfère le classique,  mon morceau préféré c’est la symphonie 5 de Beethoven pourtant les deux morceaux sont graves opposés." },
    { user: 2, text: "Ouais c’est vrai que ca peut paraître différent par exemple, tout d’abord, les voix de Travis Scott et de Kendrick Lamar sont utilisées dans Goosebumps, modifiées avec de l’autotune et un vocodeur, alors qu’il n’y a pas de voix dans la symphonie n°5." },
    { user: 2, text: "En plus, il y a des solos ( vocaux ) sur Goosebumps, mais aucun solo, même instrumental, sur la symphonie n°5. La composition est également évidemment différente, pour Goosebumps, les producteurs utilisent des instruments de synthèse et une guitare électrique, tandis que Beethoven a composé sa symphonie pour un orchestre symphonique ( avec toutes les familles d’instruments )." },
    { user: 2, text: "Également, Goosebumps n’a qu’un seul thème principal qui se répète, tandis que la symphonie de Beethoven en a 2 ( caractéristique de la sonate bithématique ). Enfin, le morceau de Beethoven n’a pas de variations de tonalité entre l’aigu et le grave, tandis qu’il y en a de nombreuses dans celui de Scott." },
    { user: 2, text: "Mais en vrai c’est pas diamétralement opposé car il y a de nombreuses ressemblances qui peuvent ne pas paraître évidentes en réalité. Par exemple, sur Goosebumps comme sur la symphonie n°5, on entend un travail sur les nuances, les nuances varient beaucoup du piano au forte entre les différentes parties du morceau ( le pré-refrain est bien plus doux sur goosebumps, et le développement est plus doux pour la symphonie n°5 )." },
    { user: 2, text: "De même, la structure est aussi ressemblante, pour Beethoven, c’est une sonate bithématique : exposition-développement-réexposition, et pour Travis Scott, la forme est refrain-couplet-refrain. Aussi, le thème principal est souvent répété dans les 2 morceaux, et fait que les morceaux restent dans notre tête ( ce qui est très important pour les tubes ). Et enfin, dans les deux morceaux, des éléments s'ajoutent ou se retirent entre les différentes parties ( pré-refrain→refrain, développement→réexposition)" },
    { user: 2, text: "C’est vraiment intéressant comment des styles différents ont des ressemblances même à des siècles d’écart, et ça peut expliquer comment un tube se forme à différentes périodes. " },
    { user: 3, text: "oui c’est grave bien, je consomme que des sons à l'ancienne moi du genre piaf ( mon son préféré c’est non, je ne regrette rien ) ou beethoven et je trouvais que tout les opposait : déjà, y’a pas de voix sur le morceau de beethoven, alors que c’est ce qui fait le succès du morceau d’edith piaf ( les instruments seuls auraient jamais fait ce succès ), aussi, la symphonie est une sonate bithématique comme tu l’as dit, et le morceau d’edith piaf a un seul thème." },
    { user: 3, text: "Mais en fait pas du tout, y’a aussi des ressemblances malgré le temps qui les sépare. Dans les deux morceaux on entend des cordes et des cuivres, mais sur le morceau de beethoven y’a d’autres familles ( orchestre symphonique ), on entend aussi pas mal de changements de nuances, et surtout, les deux morceaux vont en crescendo. Ca peut paraître simple ( je m’y connais pas trop ) mais les deux morceaux restent en tête, et je crois que c’est à cause des thèmes qui se répètent, comme avec travis finalement." },
    { user: 1, text: "Edith Piaf et Travis Scott sont mes 2 artistes préférés !! Et vous avez raison c’est différent. " },
    { user: 1, text: "Tout d’abord, la première chose qu’on remarque sont les genres : l’un des morceaux est du rap alors que l’autre est de la variété française." },
    { user: 1, text: "La tonalité des voix sont différentes, Edith Piaf a une magnifique voix aiguë mais dans goosebumps Travis Scott chante d’une voix aiguë et grave qui varie grâce au vocodeur et à l’autotune. Les instruments utilisés par Travis sont enregistrés alors que Edith Piaf joue avec un véritable orchestre." },
    { user: 1, text: "De plus, ils ne chantent même pas dans la même langue. Enfin, Piaf utilise la mesure en 3 temps significative de la valse alors que goosebump est en 4 temps." },
    { user: 1, text: "Mais étonnamment il y a aussi des ressemblances. Tout d’abord la structure, les deux morceaux s’articulent comme des couplets, refrain, couplet et sont tous les deux chantés contrairement à Beethoven. " },
    { user: 1, text: "Il y a aussi énormément de travail sur les nuances, dans le pré-refrain pour goosebumps et dans le couplet pour Non, je ne regrette rien il y a aussi  une introduction instrumentale. " },
    { user: 1, text: "D’ailleurs, les percussions sont présentes et sont centrales dans les 2 morceaux. Les thèmes principaux sont répétés dans les deux morceaux, et font vivre des sensations fortes aux auditeurs." },
    { user: 3, text: "Bref en vrai le grand point commun des 3 morceaux est le fait que le thème se répète et fait vivre des sensations et des émotions à l’auditeur. " },
    { user: 3, text: "Leur capacité à rester dans la tête leur permet de savoir durer dans le temps et leur apporte leur popularité aujourd’hui presque mythique. Ces morceaux sont efficaces, et souvent pas les plus virtuoses car peu de personnes pourraient comprendre leur complexité, on pourrait presque dire qu’ils sont “ simples et efficaces “. " },
    { user: 3, text: "Leur accessibilité leur permet de s’exporter à un public plus large, causant également leur popularité. Mais ils affichent quand-même une qualité notable, notamment dans le travail sur les nuances et la production, ils sont réellement réfléchis, et cela combiné à leur efficacité cause leur appellation de “ tube “." },
    // Ajoutez autant de messages que nécessaire
    // 3 ry 2 adonis 1 wanis
];

var index = 0;

function simulateMessage(message) {
    var messageContainer = document.getElementById("chat-container");

    var messageElement = document.createElement("div");
    messageElement.className = "message user" + message.user;

    var profileCircle = document.createElement("div");
    profileCircle.className = "profile-circle";

    var typingIndicator1 = document.createElement("div");
    typingIndicator1.className = "typing-indicator dot1";

    var typingIndicator2 = document.createElement("div");
    typingIndicator2.className = "typing-indicator dot2";

    var typingIndicator3 = document.createElement("div");
    typingIndicator3.className = "typing-indicator dot3";

    var messageText = document.createElement("div");
    messageText.className = "message-text";
    messageText.textContent = message.text;

    messageElement.appendChild(profileCircle);
    messageElement.appendChild(typingIndicator1);
    messageElement.appendChild(typingIndicator2);
    messageElement.appendChild(typingIndicator3);
    messageElement.appendChild(messageText);

    messageContainer.appendChild(messageElement);

    // Faire défiler automatiquement vers le bas avant l'animation des points
    messageContainer.scrollTop = messageContainer.scrollHeight;

    // Lancer l'animation des points
    setTimeout(function () {
        typingIndicator1.style.display = "none";
        typingIndicator2.style.display = "none";
        typingIndicator3.style.display = "none";
        messageText.style.display = "block";
    }, 3000); // Réduire le délai pour une meilleure synchronisation

    setTimeout(function () {
        messageContainer.scrollTop = messageContainer.scrollHeight;
    }, 1000); // Ajouter un délai supplémentaire pour garantir le défilement
}




function startChatSimulation() {
    index = 0;

    // Supprimer le bouton "Discussion"
    document.getElementById("simulate-button").style.display = "none";


    document.getElementById("chat-container").innerHTML = "";

    chatInterval = setInterval(function () {
        simulateMessage(messages[index]);
        index++;

        if (index === messages.length) {
            clearInterval(chatInterval);
            document.getElementById("replay-button").style.display = "inline-block";
        }

    }, 3000);
}

function restartChatSimulation() {
    index = 0;

    // Cacher le bouton "Revoir" et le bouton "Discussion"
    document.getElementById("replay-button").style.display = "none";
    document.getElementById("simulate-button").style.display = "none";

    document.getElementById("chat-container").innerHTML = ""; // Réinitialiser le contenu du chat
    chatInterval = setInterval(function () {
        simulateMessage(messages[index]);
        index++;
    }, 3000);
}






window.onload = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Execute a function when the window is being scrolled
window.onscroll = function () { scrollFunction() };

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
    // Get the button
    var mybutton = document.getElementById("scrollToTopButton");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    } else {
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    // Ajouter la classe "rotate" au bouton immédiatement
    var mybutton = document.getElementById('scrollToTopButton');
    mybutton.classList.add('rotate');

    // Ajuster le délai de défilement ici si nécessaire
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setTimeout(function () {
        mybutton.classList.remove('rotate');
    }, 2000);
}

