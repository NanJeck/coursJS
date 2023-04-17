var contact = [
    {
        prenom: 'John',
        nom: 'DOE',
        coordonnees: {
            adresse: {
                rue: '10 Rue de l\'Avenir',
                cp: 95240,
                ville: 'Cormeilles en Parisis',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'john.doe@gmail.com',
            tel: {
                fixe: '09 50 708 708',
                fax: '09 50 708 709',
                port: '08 45 56 18 09',
            }
        }
    },
    {
        prenom: 'Jane',
        nom: 'DOE',
        coordonnees: {
            adresse: {
                rue: '10 Rue de l\'Avenir',
                cp: 95240,
                ville: 'Cormeilles en Parisis',
                pays: {
                    nom: 'France',
                    code: 'FR'
                }
            },
            email: 'jane.doe@gmail.com',
            tel: {
                fixe: '09 50 708 708',
                fax: '09 50 708 709',
                port: '08 54 65 09 17 78',
            }
        }
    }
];



 var prenom = contact[0].prenom;
 document.write(prenom);

