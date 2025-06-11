# Template de Portfolio Moderne

Un template de portfolio moderne avec un thème sombre, créé en HTML5 et CSS3.

## Caractéristiques

- Design moderne et élégant avec thème sombre
- Responsive design (s'adapte à tous les écrans)
- Navigation fluide avec défilement doux
- Sections pour présenter vos projets et compétences
- Formulaire de contact
- Intégration des icônes Font Awesome
- Animations et transitions fluides

## Structure du Projet

```
portfolio/
│
├── index.html          # Structure HTML principale
├── styles.css          # Styles CSS
├── images/            # Dossier pour vos images
└── README.md          # Documentation
```

## Comment Utiliser

1. Clonez ou téléchargez ce repository
2. Personnalisez le contenu dans `index.html` :
   - Modifiez le texte dans les sections
   - Ajoutez vos propres projets
   - Mettez à jour les liens sociaux
   - Ajoutez vos propres images dans le dossier `images/`
3. Personnalisez les styles dans `styles.css` si nécessaire
4. Déployez sur votre hébergement préféré

## Personnalisation

### Couleurs
Les couleurs principales sont définies comme variables CSS dans `styles.css` :
- `--primary-color`: Couleur de fond principale
- `--secondary-color`: Couleur de fond secondaire
- `--accent-color`: Couleur d'accent (utilisée pour les éléments importants)
- `--text-color`: Couleur du texte principal
- `--text-secondary`: Couleur du texte secondaire

### Ajouter des Projets
Pour ajouter un nouveau projet, copiez le bloc suivant dans la section projets :

```html
<div class="project-card">
    <div class="project-image"></div>
    <h3>Nom du Projet</h3>
    <p>Description du projet</p>
    <div class="project-links">
        <a href="#" class="project-link">Voir le projet</a>
        <a href="#" class="project-link">Code source</a>
    </div>
</div>
```

### Ajouter des Compétences
Pour ajouter une nouvelle compétence, copiez le bloc suivant dans la section compétences :

```html
<div class="skill-card">
    <i class="fab fa-[nom-de-l-icone]"></i>
    <h3>Nom de la Compétence</h3>
</div>
```

## Support

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur GitHub.

## Licence

Ce template est disponible sous licence MIT. Vous êtes libre de l'utiliser et de le modifier selon vos besoins. 