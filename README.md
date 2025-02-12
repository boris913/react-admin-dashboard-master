<h1 align="center">DashMaster</h1>

![Demo App](/public/dashboard-react.png)
![Demo App](/public/ventes.png)
![Demo App](/public/parametre.png)

### A Propos
DashMaster est une application de tableau de bord complète et interactive conçue pour offrir un aperçu global des performances de votre entreprise. Elle utilise des composants React pour afficher des statistiques clés, des graphiques et des tableaux de données, vous permettant de suivre les ventes, les utilisateurs, les produits et plus encore. Voici une explication de la structure de l'application et de ses fonctionnalités :

Nom de l'application : DashMaster

Dash : Référence à un tableau de bord, un outil essentiel pour visualiser des données importantes.
Master : Indique la maîtrise et le contrôle total sur les informations affichées.
Structure de l'application :

Sidebar : Un menu de navigation latéral permettant de passer d'une section à l'autre de l'application (Aperçu, Produits, Utilisateurs, Ventes, Commandes, Analytique, Paramètres).
Header : Une en-tête commune à chaque page, affichant le titre de la section courante.
StatCard : Un composant réutilisable pour afficher des statistiques clés avec une icône et une valeur.
Charts and Graphs : Divers graphiques pour visualiser les tendances et les distributions (par exemple, SalesOverviewChart, UserGrowthChart).
Pages principales :

OverviewPage : Affiche un aperçu global des ventes, des nouveaux utilisateurs, des produits totaux et du taux de conversion.
ProductsPage : Présente des statistiques sur les produits, un tableau des produits et des graphiques de tendance des ventes.
UsersPage : Fournit des statistiques sur les utilisateurs, un tableau des utilisateurs et des graphiques de croissance et d'activité.
SalesPage : Montre des statistiques de vente, un aperçu des ventes et des graphiques détaillés par catégorie et par jour.
OrdersPage : Affiche des statistiques sur les commandes, un tableau des commandes et des graphiques de distribution des commandes.
SettingsPage : Permet de gérer les paramètres du profil, les notifications, la sécurité, les comptes connectés et une zone dangereuse pour les actions critiques.
Technologies utilisées :

React : Bibliothèque JavaScript pour construire l'interface utilisateur.
Framer Motion : Pour les animations fluides et interactives.
Lucide Icons : Pour les icônes vectorielles.
Recharts : Pour les graphiques et les visualisations de données.
React Router : Pour la navigation entre les pages.
En utilisant DashMaster, les utilisateurs peuvent facilement surveiller et analyser les données critiques de leur entreprise, ce qui leur permet de prendre des décisions éclairées et d'améliorer leurs performances globales.
### Run this app locally

```shell
npm install
```

```shell
npm run start
```
