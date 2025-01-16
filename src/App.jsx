import React from "react";
import mindLensIcon from "./assets/mindlensicon.jpg";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <img src={mindLensIcon} alt="MindLens Icon" className="w-32 h-32 mb-6" />
      <h1 className="text-4xl font-bold mb-4">MindLens</h1>
      <p className="text-lg max-w-prose text-center mb-6">
        <strong>MindLens</strong> est un agent basé sur Mineflayer et un LLM (Large Language Model), conçu pour explorer l'univers de Minecraft de manière autonome.
      </p>
      <p className="text-lg max-w-prose text-center mb-6">
        Ce projet est inspiré des travaux de recherche de NVIDIA et de leur agent <em>Voyager</em>, utilisant ChatGPT-4. L'objectif de <strong>MindLens</strong> est de créer un bot Minecraft capable de compléter l'arbre de progression en toute autonomie.
      </p>
      <p className="text-lg max-w-prose text-center mb-6">
        Dans un premier temps, l'agent utilise Mineflayer pour fournir des métriques in-game au LLM. Celui-ci renvoie ensuite un code JavaScript exécuté en Python pour simplifier le processus. Une fois cette phase accomplie, le projet évoluera vers une approche utilisant la vision (captures d'écran), le clavier et la souris pour interagir avec le jeu, sans dépendre des métriques in-game.
      </p>
      <p className="text-lg max-w-prose text-center mb-6">
        Le développement de <strong>MindLens</strong> s'accompagne de défis importants, notamment la lenteur des réponses des LLM tels que Falcon3:7b et Llama3.3, ainsi que la gestion des interactions via le clavier et la souris. Ces obstacles doivent être surmontés pour rendre l'agent plus performant et fluide.
      </p>
      <p className="text-lg max-w-prose text-center mb-6">
        À terme, ce projet ambitionne de mesurer l'efficacité de l'agent à travers des métriques avancées comme la rapidité d'exécution, la logique d'avancement dans les tâches, et la capacité à répéter des actions apprises. De plus, une étude sera menée pour évaluer si d'autres joueurs peuvent distinguer l'IA d'un joueur humain dans un environnement contrôlé.
      </p>
      <p className="text-lg max-w-prose text-center mb-6">
        Par éthique, <strong>MindLens</strong> ne sera pas utilisé contre d'autres joueurs sur des serveurs publics. Ce projet est à but personnel, dédié à l'apprentissage et à la recherche.
      </p>
      <footer className="mt-10 text-center text-sm text-gray-500">
        &copy; 2025 MindLens Project. Tous droits réservés.
      </footer>
    </div>
  );
};

export default App;