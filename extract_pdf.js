const fs = require('fs');
const pdf2img = require('pdf-img-convert');

(async function() {
    try {
        console.log("Converting PDF to images...");
        const outputImages = await pdf2img.convert('BSNL_Customer_Executive_Pamphlet.pdf', {
            width: 1240, // High quality width for A4
            page_numbers: [1, 2]
        });
        
        fs.writeFileSync('pamphlet_1.png', outputImages[0]);
        console.log("Saved pamphlet_1.png");
        if (outputImages.length > 1) {
            fs.writeFileSync('pamphlet_2.png', outputImages[1]);
            console.log("Saved pamphlet_2.png");
        }
        console.log("Done extracting images!");
    } catch (e) {
        console.error(e);
    }
})();
