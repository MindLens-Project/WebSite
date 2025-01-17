const Roadmap = () => {
	const steps = [
		{
			title: "1. Agent sans bibliothèque externe",
			description:
				"Développer un agent capable de jouer à Minecraft en récupérant des données métriques via Mineflayer, sans utiliser de bibliothèques externes.",
		},
		{
			title: "2. Agent avec bibliothèque externe",
			description:
				"Étendre les capacités avec des bibliothèques pour des comportements plus avancés.",
		},
		{
			title: "3. Analyse en temps réel du flux vidéo",
			description:
				"Créer un agent décrivant les événements en jeu à partir d'un flux vidéo.",
		},
		{
			title: "4. Retour de code basé sur le flux vidéo",
			description:
				"Générer des réponses en code selon l'analyse du flux vidéo en temps réel.",
		},
		{
			title: "5. Contrôle de la souris via le flux vidéo",
			description:
				"Permettre à l'agent de contrôler la souris selon les éléments visibles dans le flux vidéo.",
		},
	];

	return (
		<section className="roadmap-container mt-10 mb-6">
			<h2 className="text-3xl font-bold text-center mb-8">Roadmap et Objectifs</h2>
			<div className="space-y-6">
				{steps.map((step, index) => (
					<div
						key={index}
						className="border-l-4 border-blue-500 p-4 bg-white shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
					>
						<h3 className="text-xl font-semibold text-blue-600">{step.title}</h3>
						<p className="text-gray-700 mt-2">{step.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Roadmap;