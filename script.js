const certificates = [
    { image: 'images/cert1.jpg', title: 'VADODRA HACKATHON 6.0', issuer: 'Parul University' },
    { image: 'images/cert2.jpg', title: 'Hashgraph Developer Course', issuer: 'BUILTON HEDERA' },
    { image: 'images/cert3.jpg', title: 'Ignitia Startup Fest 2025', issuer: 'Navista' },
    { image: 'images/cert4.png', title: 'DSA with Java', issuer: 'Apna College' },
    { image: 'images/cert5.jpg', title: 'Impact Training Program', issuer: 'Smart Interviews' },
    { image: 'images/cert6.jpg', title: 'AI Fundamentals', issuer: 'Cisco & IBM' },
    { image: 'images/cert7.jpg', title: 'Computer Networks', issuer: 'NPTEL' },
    { image: 'images/cert8.jpg', title: 'AWS Cloud Practitioner', issuer: 'AWS' },
    { image: 'images/cert9.jpg', title: 'AWS Academy Graduate', issuer: 'AWS Academy' },
    { image: 'images/cert10.jpg', title: 'PU CODE HACKATHON 2.0', issuer: 'Parul University' },
    { image: 'images/cert11.jpg', title: 'Math Quiz (Ramanujan)', issuer: 'Parul University' },
    { image: 'images/cert12.jpg', title: 'Sparkathon', issuer: 'Walmart Global Tech' },
    { image: 'images/cert13.png', title: 'Quiz Competition', issuer: 'Adobe' },
    { image: 'images/cert14.png', title: 'TchNova Brilliance', issuer: 'ESSPL' },
    { image: 'images/cert15.png', title: 'Sustainability Challenge', issuer: 'L\'Oreal' },
    { image: 'images/cert16.png', title: 'ProduScope Case Study', issuer: 'IIT Guwahati' },
    { image: 'images/cert17.png', title: 'Boardroom Quiz', issuer: 'IIM Calcutta' },
    { image: 'images/cert18.png', title: 'HP Power Lab 2.0', issuer: 'HPCL' }
];

const galleryGrid = document.getElementById('gallery');
const modal = document.getElementById('imageModal');
const fullImg = document.getElementById('fullImage');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close-modal');

function loadCertificates() {
    certificates.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'cert-card';
        card.innerHTML = `
            <div class="img-holder">
                <img src="${cert.image}" alt="${cert.title}" loading="lazy">
            </div>
            <div class="cert-details">
                <h3>${cert.title}</h3>
                <p>${cert.issuer}</p>
            </div>
        `;
        card.onclick = () => {
            modal.style.display = "flex";
            fullImg.src = cert.image;
            captionText.innerText = cert.title;
        };
        galleryGrid.appendChild(card);
    });
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

document.addEventListener('DOMContentLoaded', loadCertificates);