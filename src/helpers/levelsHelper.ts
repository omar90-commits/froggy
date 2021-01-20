export const levels:string[] = [
	`<p>Bienvenido a Flexbox Froggy, un juego donde ayudarás a Froggy y a sus amigos escribiendo código CSS. Guía a esta rana hacia la hoja de lirio en la derecha, usando la propiedad <span class="properties px-2 border-bottom-1">justify-content</span>, la cual alinea elementos horizontalmente y acepta los siguientes valores:</p>

		<ul>
			<li><span class="properties px-2">flex-start</span>: Alinea elementos al lado izquierdo del contenedor.</li>
			<li><span class="properties px-2">flex-end</span>: Alinea elementos al lado derecho del contenedor.</li>
			<li><span class="properties px-2">center</span>: Alinea elementos en el centro del contenedor.</li>
			<li><span class="properties px-2">space-between</span>: Muestra elementos con la misma distancia entre ellos.</li>
			<li><span class="properties px-2">space-around</span>: Muestra elementos con la misma separación alrededor de ellos.</li>
		</ul>

		<p>Por ejemplo, <span class="properties px-2">justify-content: flex-end;</span>moverá la rana a la derecha.</p>
    `,
    `<p>Nuevamente, utiliza <span class="properties px-2 border-bottom-1">justify-content</span>, para ayudar a esas ranas a llegar a sus hojas de lirio. Recuerda que esta propiedad CSS alinea elementos horizontalmente y acepta los siguientes valores:</p>

		<ul>
			<li><span class="properties px-2">flex-start</span>: Alinea elementos al lado izquierdo del contenedor.</li>
			<li><span class="properties px-2">flex-end</span>: Alinea elementos al lado derecho del contenedor.</li>
			<li><span class="properties px-2">center</span>: Alinea elementos en el centro del contenedor.</li>
			<li><span class="properties px-2">space-between</span>: Muestra elementos con la misma distancia entre ellos.</li>
			<li><span class="properties px-2">space-around</span>: Muestra elementos con la misma separación alrededor de ellos.</li>
		</ul>
    `,
    `
	    <p>Ayuda a las tres ranas a encontrar sus hojas de lirio usando <span class="properties px-2 border-bottom-1">justify-content</span>. En esta oportunidad, las hojas de lirio tienen mucho espacio a su alrededor.
	    </p>

	    <p>Si no recuerdas los valores de una propiedad, puedes pasar el cursor sobre el nombre de una e inmediatamente se mostrarán. Prueba pasando el cursor sobre <span class="properties px-2 border-bottom-1">justify-content</span>.
   		</p>
    `,
    `	<p>Ahora las hojas de lirio de los bordes se han desplazado a un costado, aumentando así el espacio entre ellas. Usa <span class="properties px-2 border-bottom-1">justify-content</span>. En esta oportunidad, las hojas de lirio tienen el mismo espacio entre ellas.</p>
    `,
    `<p>Ahora usa <span class="properties px-2 border-bottom-1">align-items</span> para ayudar a las ranas a llegar al fondo del estanque. Esta propiedad CSS alinea elementos verticalmente y acepta los siguientes valores:</p>

    	<ul>
			<li><span class="properties px-2">flex-start</span>: Alinea elementos a la parte superior del contenedor.</li>
			<li><span class="properties px-2">flex-end</span>: Alinea elementos a la parte inferior del contenedor.</li>
			<li><span class="properties px-2">center</span>: Alinea elementos en el centro (verticalmente hablando) del contenedor.</li>
			<li><span class="properties px-2">baseline</span>: Muestra elementos en la línea base del contenedor.</li>
			<li><span class="properties px-2">stretch</span>: Elementos se estiran para ajustarse al contenedor.</li>
		</ul>
    `,
    `<p>Mueve la rana al centro del estanque, usando una combinación de <span class="properties px-2 border-bottom-1">justify-content</span> y <span class="properties px-2 border-bottom-1">align-items</span>.</p>
    `,
    `<p>Nuevamente, las ranas necesitan cruzar el estanque. En esta oportunidad, las hojas de lirio tienen mucho espacio alrededor de ellas. Debes usar una combinación de <span class="properties px-2 border-bottom-1">justify-content</span> y <span class="properties px-2 border-bottom-1">align-items</span>.</p>
    `,
    `<p>Las ranas necesitan ponerse en el mismo orden que sus hojas de lirio usando <span class="properties px-2 border-bottom-1">flex-direction</span>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p>

    	<ul>
			<li><span class="properties px-2">row</span>:  Elementos son colocados en la misma dirección del texto.</li>
			<li><span class="properties px-2">row-reverse</span>: Elementos son colocados en la dirección opuesta al texto.</li>
			<li><span class="properties px-2">column</span>: Elementos se colocan de arriba hacia abajo.</li>
			<li><span class="properties px-2">column-reverse</span>: Elementos se colocan de abajo hacia arriba.</li>
		</ul>
    `,
    `	<p>Ayuda a las ranas a encontrar su hoja de lirio en la columna usando <span class="properties px-2 border-bottom-1">flex-direction</span>. Esta propiedad CSS define la dirección de los elementos en el contenedor, y acepta los siguientes valores:</p>

    	<ul>
			<li><span class="properties px-2">row</span>:  Elementos son colocados en la misma dirección del texto.</li>
			<li><span class="properties px-2">row-reverse</span>: Elementos son colocados en la dirección opuesta al texto.</li>
			<li><span class="properties px-2">column</span>: Elementos se colocan de arriba hacia abajo.</li>
			<li><span class="properties px-2">column-reverse</span>: Elementos se colocan de abajo hacia arriba.</li>
		</ul>
    `,
    `	<p>Ayuda a las ranas a llegar a sus hojas de lirio. A pesar de que ellas parecen estar cerca, necesitarás usar <span class="properties px-2 border-bottom-1">flex-direction</span> y <span class="properties px-2 border-bottom-1">justify-content</span> para llegar hasta allí.</p>

    	<p>Nota que cuando estableces la dirección a una fila invertida o columna, el inicio y el final también se invierten.</p>
    `
];

export const levelsFrog:string[] = [
	`
		<div class="bg-frog animate-bg_frog bg-frog-green"></div>
	    <div class="bg-lilypad bg-lilypad-green"></div>
	`,
	`
		<div class="bg-frog animate-bg_frog bg-frog-green"></div>
		<div
			style="left: 25%;"; 
			class="bg-frog animate-bg_frog bg-frog-yellow"
		></div>

	    <div 
	    	style="left: 28%;";
	    	class="bg-lilypad bg-lilypad-green"></div>

	    <div 
	    	style="left: 50%;";
	    	class="bg-lilypad bg-lilypad-yellow"></div>
	`,
	`
		<div class="bg-frog animate-bg_frog bg-frog-green"></div>
		<div
			style="left: 25%;"; 
			class="bg-frog animate-bg_frog bg-frog-yellow"
		></div>

		<div
			style="left: 45%;"; 
			class="bg-frog animate-bg_frog bg-frog-red"
		></div>

	    <div 
	    	style="left: 20%;";
	    	class="bg-lilypad bg-lilypad-green"></div>

	    <div 
	    	style="left: 45%;";
	    	class="bg-lilypad bg-lilypad-yellow"></div>

	    <div 
	    	style="left: 70%;";
	    	class="bg-lilypad bg-lilypad-red"></div>
	`,
	`
		<div class="bg-frog animate-bg_frog bg-frog-green"></div>
		<div
			style="left: 25%;"; 
			class="bg-frog animate-bg_frog bg-frog-yellow"
		></div>

		<div
			style="left: 45%;"; 
			class="bg-frog animate-bg_frog bg-frog-red"
		></div>

	    <div 
	    	style="left: 10%;";
	    	class="bg-lilypad bg-lilypad-green"></div>

	    <div 
	    	style="left: 40%;";
	    	class="bg-lilypad bg-lilypad-yellow"></div>

	    <div 
	    	style="left: 70%;";
	    	class="bg-lilypad bg-lilypad-red"></div>
	`,
	`
		<div 
			class="bg-frog animate-bg_frog bg-frog-green"
			style="left: 7%;"
		></div>
		<div
			style="left: 32%;"; 
			class="bg-frog animate-bg_frog bg-frog-yellow"
		></div>
		<div
			style="left: 57%;"; 
			class="bg-frog animate-bg_frog bg-frog-red"
		></div>

	    <div 
	    	style="left: 5%; top: 80%;";
	    	class="bg-lilypad bg-lilypad-green"></div>

	    <div 
	    	style="left: 30%; top: 80%";
	    	class="bg-lilypad bg-lilypad-yellow"></div>

	    <div 
	    	style="left: 55%; top: 80%";
	    	class="bg-lilypad bg-lilypad-red"></div>
	`,
	`
		<div 
			class="bg-frog animate-bg_frog bg-frog-green"
			style="left: 7%;"
		></div>

	    <div 
	    	style="left: 40%; top: 38%;";
	    	class="bg-lilypad bg-lilypad-green"></div>
	`,
	`
		<div 
			class="bg-frog animate-bg_frog bg-frog-green"
		></div>
		<div
			style="left: 25%;"; 
			class="bg-frog animate-bg_frog bg-frog-yellow"
		></div>
		<div
			style="left: 45%;"; 
			class="bg-frog animate-bg_frog bg-frog-red"
		></div>

	    <div 
	    	style="left: 5%; top: 80%;";
	    	class="bg-lilypad bg-lilypad-green"></div>

	    <div 
	    	style="left: 40%; top: 80%";
	    	class="bg-lilypad bg-lilypad-yellow"></div>

	    <div 
	    	style="left: 75%; top: 80%";
	    	class="bg-lilypad bg-lilypad-red"></div>
	`,
	`
		<div 
			class="bg-frog animate-bg_frog bg-frog-green"
			style="left: 1%;"
		></div>
		<div
			style="left: 19%;"; 
			class="bg-frog animate-bg_frog bg-frog-yellow"
		></div>
		<div
			style="left: 37%;"; 
			class="bg-frog animate-bg_frog bg-frog-red"
		></div>

	    <div 
	    	style="left: 77%;"
	    	class="bg-lilypad bg-lilypad-green"></div>

	    <div 
	    	style="left: 56%;"
	    	class="bg-lilypad bg-lilypad-yellow"></div>

	    <div 
	    	style="left: 35%;"
	    	class="bg-lilypad bg-lilypad-red"></div>
	`,
	`
		<div 
			class="bg-frog animate-bg_frog bg-frog-green"
		></div>
		<div
			style="left: 25%;"; 
			class="bg-frog animate-bg_frog bg-frog-yellow"
		></div>
		<div
			style="left: 45%;"; 
			class="bg-frog animate-bg_frog bg-frog-red"
		></div>

	    <div 
	    	style="left: 3%;"
	    	class="bg-lilypad bg-lilypad-green"></div>

	    <div 
	    	style="left: 3%; top: calc(32% - 100px);"
	    	class="bg-lilypad bg-lilypad-yellow"></div>

	    <div 
	    	style="left: 3%; top: calc(46% - 100px);"
	    	class="bg-lilypad bg-lilypad-red"></div>
	`,
	`
		<div 
			class="bg-frog animate-bg_frog bg-frog-green"
		></div>
		<div
			style="left: 27%;"; 
			class="bg-frog animate-bg_frog bg-frog-yellow"
		></div>
		<div
			style="left: 49%;"; 
			class="bg-frog animate-bg_frog bg-frog-red"
		></div>




	    <div 
	    	style="left: 47%;"
	    	class="bg-lilypad bg-lilypad-green"></div>

	    <div 
	    	style="left: 25%;"
	    	class="bg-lilypad bg-lilypad-yellow"></div>

	    <div 
	    	style="left: 3%;"
	    	class="bg-lilypad bg-lilypad-red"></div>
	`
];