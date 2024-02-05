module.exports = {
	'*.{js,jsx,ts,tsx}': (filenames) => {
		// Envolve cada caminho de arquivo entre aspas
		const quotedFilenames = filenames
			.map((filename) => `"${filename}"`)
			.join(' ')

		return [
			`prettier --write ${quotedFilenames}`,
			// Ajuste para o comando lint, se necessário
			`npm run lint --fix . --file ${quotedFilenames}`
		]
	}
}
