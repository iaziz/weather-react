import React from 'react';

export let weatherIcons = (icon) => {
	switch(icon) {
		case "01d":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M16 9c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7c0-3.859-3.141-7-7-7zM16 21c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5zM16 7c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM16 25c-0.552 0-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1zM23.777 9.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM8.223 22.365l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0l1.414-1.414c0.391-0.392 0.391-1.023 0-1.414s-1.023-0.392-1.414 0zM7 16c0-0.552-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1zM28 15h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1zM8.221 9.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM23.779 22.363c-0.392-0.391-1.023-0.391-1.414 0s-0.392 1.023 0 1.414l1.414 1.414c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414z"></path>
					</svg>
					<h5>Day</h5>	
				</div>
			);
		case "02d":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M13 4c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM20.777 6.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM1 14h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM22 13c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1zM5.221 6.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM25 16c-0.332 0-0.66 0.023-0.987 0.070-1.048-1.43-2.445-2.521-4.029-3.219-0.081-3.789-3.176-6.852-6.984-6.852-3.859 0-7 3.141-7 7 0 1.090 0.271 2.109 0.719 3.027-3.727 0.152-6.719 3.211-6.719 6.973 0 3.859 3.141 7 7 7 0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM13 8c2.488 0 4.535 1.823 4.919 4.203-0.626-0.125-1.266-0.203-1.919-0.203-2.871 0-5.531 1.238-7.398 3.328-0.371-0.698-0.602-1.482-0.602-2.328 0-2.762 2.238-5 5-5zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.484 0 0.941 0.091 1.383 0.221 0.176 0.049 0.354 0.089 0.52 0.158 0.273-0.535 0.617-1.025 0.999-1.484 1.461-1.758 3.634-2.895 6.099-2.895 0.633 0 1.24 0.091 1.828 0.232 0.66 0.156 1.284 0.393 1.865 0.706 1.456 0.773 2.651 1.971 3.404 3.441 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"></path>
					</svg>
					<h5>Day</h5>	
				</div>
			);
		case "03d":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M25 10c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 22c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5z"></path>
					</svg>
					<h5>Day</h5>
				</div>
			);
		case "04d":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M32 15c0-3.073-2.5-5.572-5.573-5.572-0.15 0-0.298 0.007-0.447 0.018-1.445-1.803-3.624-2.874-5.98-2.874-2.355 0-4.535 1.070-5.98 2.874-0.148-0.012-0.298-0.018-0.449-0.018-3.070-0-5.57 2.499-5.57 5.572 0 0.322 0.043 0.631 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.605-0.565-3.068-1.479-4.25 0.911-0.994 1.479-2.302 1.479-3.75zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 0.035-0.066 0.078-0.125 0.113-0.189 0.352-0.642 0.785-1.23 1.292-1.753 1.443-1.495 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.379 0.353-0.145 0.729-0.238 1.117-0.301l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.338 1.314 0.836 1.79 1.449 0.656 0.845 1.065 1.897 1.065 3.051 0 2.762-2.238 5-5 5zM29.098 17.352c-1.155-0.841-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070-2.133 0-4.145 0.69-5.809 1.896 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.848 2.852-3.126 5.070-3.126s4.122 1.279 5.068 3.126c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.572 0 0.905-0.348 1.721-0.902 2.351z"></path>
					</svg>
					<h5>Day</h5>
				</div>
				
			);
		case "09d":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M25 4c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 16c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5zM14.063 30c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM6 24c0 1.105 0.894 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"></path>
					</svg>
					<h5>Day</h5>
				</div>
			);
		case "10d":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M26.065 4.425c-1.499-1.535-3.57-2.425-5.733-2.425-2.16 0-4.23 0.889-5.729 2.425-3.301 0.152-5.939 2.885-5.939 6.221 0 3.436 2.794 6.232 6.23 6.232 0.365 0 0.725-0.031 1.079-0.094 1.296 0.845 2.807 1.302 4.358 1.302 1.553 0 3.066-0.457 4.361-1.302 0.357 0.062 0.716 0.094 1.081 0.094 3.434 0 6.227-2.796 6.227-6.232-0-3.336-2.637-6.070-5.935-6.221zM25.773 14.878c-0.52 0-1.023-0.094-1.5-0.279-1.094 0.953-2.484 1.487-3.941 1.487-1.453 0-2.844-0.534-3.937-1.487-0.477 0.185-0.984 0.279-1.5 0.279-2.332 0-4.23-1.898-4.23-4.232 0-2.331 1.898-4.229 4.23-4.229 0.199 0 0.398 0.016 0.595 0.043 1.131-1.537 2.909-2.46 4.842-2.46s3.715 0.923 4.844 2.46c0.195-0.027 0.395-0.043 0.598-0.043 2.332 0 4.227 1.898 4.227 4.229 0 2.333-1.895 4.232-4.227 4.232zM9 16.043h-8c-0.552 0-1 0.447-1 1s0.448 1 1 1h8c0.552 0 1-0.447 1-1s-0.448-1-1-1zM1 14.043h4c0.552 0 1-0.447 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.447-1 1s0.448 1 1 1zM3 10.043h4c0.552 0 1-0.447 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.447-1 1s0.448 1 1 1zM14 24c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"></path>
					</svg>
					<h5>Day</h5>
				</div>
			);
		case "11d":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M32 8.427c0-3.072-2.5-5.57-5.573-5.57-0.15 0-0.298 0.005-0.447 0.017-1.445-1.802-3.624-2.874-5.98-2.874-2.355 0-4.535 1.072-5.98 2.874-0.148-0.012-0.298-0.017-0.449-0.017-3.070 0-5.57 2.499-5.57 5.57 0 0.322 0.043 0.633 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.147 1 2.507 1.684 3.95 2.076l-1.432 0.956 2 2-2 4 6-4-2-2 0.301-0.599c2.297-0.070 4.484-0.921 6.217-2.432 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.604-0.565-3.068-1.479-4.25 0.911-0.992 1.479-2.301 1.479-3.75zM25 21.427c-1.070 0-2.057-0.344-2.871-0.915-1.188 1.431-2.859 2.421-4.764 2.758l-1.486 0.145c-2.426-0.039-4.566-1.164-6.008-2.902-0.813 0.572-1.801 0.915-2.871 0.915-2.762 0-5-2.237-5-5 0-2.76 2.238-5 5-5 0.676 0 1.316 0.138 1.902 0.38 0.035-0.068 0.078-0.125 0.113-0.19 0.352-0.642 0.785-1.229 1.292-1.753 1.443-1.493 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.38 0.353-0.146 0.729-0.24 1.117-0.302l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.339 1.314 0.836 1.79 1.45 0.656 0.845 1.065 1.896 1.065 3.050 0 2.763-2.238 5-5 5zM29.098 10.779c-1.155-0.84-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.543-4.814-4.070-8.013-4.070-2.133 0-4.145 0.691-5.809 1.897 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.849 2.852-3.128 5.070-3.128s4.122 1.279 5.068 3.128c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.57 0 0.906-0.348 1.723-0.902 2.352z"></path>
					</svg>
					<h5>Day</h5>
				</div>
			);
		case "13d":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M20.378 27.73l-1.125-0.648c0.034-0.195 0.060-0.394 0.060-0.602s-0.026-0.406-0.063-0.602l1.128-0.65c0.526-0.307 0.706-0.983 0.404-1.506-0.305-0.53-0.979-0.711-1.508-0.406l-1.137 0.656c-0.305-0.259-0.648-0.462-1.031-0.6v-1.306c0-0.611-0.496-1.105-1.105-1.105s-1.104 0.495-1.104 1.105v1.305c-0.383 0.137-0.728 0.342-1.033 0.602l-1.134-0.656c-0.53-0.305-1.206-0.125-1.51 0.405-0.305 0.526-0.121 1.203 0.406 1.508l1.122 0.648c-0.037 0.197-0.060 0.396-0.060 0.603s0.023 0.406 0.060 0.602l-1.122 0.648c-0.529 0.305-0.711 0.984-0.406 1.512s0.98 0.707 1.508 0.402l1.135-0.652c0.305 0.258 0.65 0.461 1.034 0.598v1.309c0 0.609 0.495 1.102 1.104 1.102s1.105-0.492 1.105-1.102v-1.309c0.383-0.137 0.73-0.34 1.033-0.602l1.135 0.656c0.529 0.305 1.203 0.125 1.508-0.402s0.125-1.203-0.404-1.512zM16 27.586c-0.609 0-1.105-0.496-1.105-1.105s0.496-1.103 1.105-1.103 1.104 0.494 1.104 1.103-0.495 1.105-1.104 1.105zM29.635 24.766l-0.755-0.201c-0.018-0.24-0.076-0.467-0.181-0.686l0.548-0.548c0.258-0.258 0.256-0.674 0-0.928-0.255-0.256-0.669-0.258-0.927 0l-0.549 0.547c-0.216-0.102-0.447-0.16-0.685-0.18l-0.201-0.754c-0.094-0.349-0.453-0.559-0.805-0.465-0.35 0.095-0.555 0.454-0.464 0.805l0.201 0.744c-0.099 0.068-0.193 0.143-0.281 0.229-0.086 0.089-0.159 0.182-0.227 0.279l-0.744-0.201c-0.35-0.094-0.712 0.117-0.806 0.465-0.094 0.352 0.117 0.71 0.464 0.805l0.75 0.202c0.021 0.236 0.081 0.466 0.186 0.685l-0.551 0.551c-0.255 0.256-0.254 0.671 0.003 0.926 0.255 0.255 0.669 0.258 0.924 0.003l0.552-0.552c0.216 0.107 0.448 0.167 0.688 0.185l0.198 0.751c0.096 0.35 0.453 0.559 0.805 0.465 0.349-0.094 0.56-0.453 0.466-0.807l-0.201-0.744c0.094-0.066 0.19-0.141 0.279-0.227 0.086-0.087 0.159-0.184 0.227-0.28l0.745 0.201c0.35 0.094 0.711-0.116 0.803-0.464 0.094-0.349-0.113-0.708-0.462-0.805zM27.395 25.184c-0.258 0.258-0.673 0.256-0.93 0-0.254-0.254-0.256-0.671 0-0.928 0.256-0.255 0.673-0.255 0.93 0 0.254 0.256 0.254 0.674 0 0.928zM7.434 21.406l-0.742 0.199c-0.069-0.094-0.141-0.189-0.228-0.277-0.088-0.086-0.182-0.16-0.28-0.227l0.199-0.746c0.094-0.35-0.115-0.711-0.461-0.803-0.352-0.094-0.711 0.115-0.805 0.464l-0.203 0.754c-0.238 0.020-0.466 0.078-0.684 0.181l-0.551-0.548c-0.258-0.258-0.672-0.256-0.927 0-0.256 0.256-0.256 0.672 0 0.928l0.548 0.548c-0.103 0.219-0.163 0.449-0.181 0.686l-0.753 0.201c-0.352 0.096-0.56 0.453-0.466 0.805 0.095 0.349 0.454 0.555 0.806 0.464l0.742-0.202c0.066 0.1 0.141 0.194 0.231 0.281 0.086 0.086 0.18 0.163 0.277 0.227l-0.199 0.744c-0.094 0.352 0.115 0.714 0.463 0.807 0.352 0.094 0.708-0.115 0.802-0.465l0.203-0.75c0.238-0.020 0.469-0.079 0.688-0.184l0.549 0.549c0.255 0.258 0.669 0.253 0.927-0.003 0.254-0.254 0.258-0.669 0-0.926l-0.551-0.551c0.106-0.216 0.168-0.449 0.184-0.688l0.754-0.199c0.348-0.095 0.556-0.453 0.462-0.805-0.094-0.348-0.453-0.556-0.806-0.465zM5.535 23.185c-0.256 0.256-0.672 0.256-0.93 0-0.254-0.255-0.254-0.673 0-0.927 0.258-0.255 0.673-0.255 0.93 0s0.254 0.672 0 0.927zM32 11c0-3.859-3.141-7-7-7-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7zM22.129 15.083c-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5c-1.070 0-2.057-0.344-2.871-0.917z"></path>
					</svg>
					<h5>Day</h5>
				</div>
			);
		case "50d":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M7 10h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM25 12h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM25 16h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM25 20h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1z" />
					</svg>
					<h5>Day</h5>
				</div>
			);


		case "01n":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M21.866 21.447c-3.117 3.12-8.193 3.12-11.313 0s-3.12-8.195 0-11.314c0.826-0.824 1.832-1.453 2.989-1.863 0.365-0.128 0.768-0.035 1.039 0.237 0.274 0.273 0.366 0.677 0.237 1.039-0.784 2.211-0.25 4.604 1.391 6.245 1.638 1.639 4.031 2.172 6.245 1.391 0.362-0.129 0.767-0.036 1.039 0.237 0.273 0.271 0.365 0.676 0.236 1.039-0.408 1.157-1.038 2.164-1.863 2.989zM11.967 11.547c-2.34 2.34-2.34 6.147 0 8.486 2.5 2.501 6.758 2.276 8.937-0.51-2.247 0.141-4.461-0.671-6.109-2.318s-2.458-3.861-2.318-6.108c-0.18 0.141-0.35 0.29-0.51 0.451z"></path>
					</svg>
					<h5>Night</h5>
				</div>
			);

		case "02n":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M27.191 16.385c0.305-0.227 0.613-0.449 0.889-0.725 0.826-0.827 1.454-1.833 1.862-2.991 0.13-0.362 0.038-0.768-0.236-1.039-0.272-0.273-0.676-0.366-1.039-0.237-2.212 0.781-4.605 0.25-6.244-1.391-1.641-1.641-2.174-4.033-1.391-6.244 0.128-0.363 0.036-0.767-0.237-1.040-0.271-0.271-0.676-0.365-1.039-0.237-1.159 0.411-2.164 1.039-2.99 1.864-2.096 2.094-2.749 5.063-2.030 7.737-2.703 0.345-5.133 1.781-6.751 3.987-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-3.090-2.026-5.689-4.809-6.615zM18.182 5.76c0.159-0.161 0.329-0.311 0.509-0.452-0.141 2.249 0.671 4.461 2.319 6.108 1.648 1.648 3.861 2.458 6.109 2.319-0.862 1.099-2.050 1.783-3.32 2.074-1.711-2.172-4.225-3.539-6.997-3.762-0.767-2.122-0.318-4.59 1.38-6.288zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 1.262-2.46 3.734-4.181 6.645-4.346 0.152-0.009 0.301-0.033 0.453-0.033 0.807 0 1.582 0.126 2.313 0.349 0.987 0.302 1.887 0.794 2.668 1.428 0.746 0.605 1.371 1.348 1.863 2.181 0.083 0.141 0.177 0.273 0.253 0.421 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"></path>
					</svg>
					<h5>Night</h5>
				</div>
			);
		
		case "03n":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M25 10c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 22c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5z"></path>
					</svg>
					<h5>Night</h5>
				</div>
			);
		case "04n":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M32 15c0-3.073-2.5-5.572-5.573-5.572-0.15 0-0.298 0.007-0.447 0.018-1.445-1.803-3.624-2.874-5.98-2.874-2.355 0-4.535 1.070-5.98 2.874-0.148-0.012-0.298-0.018-0.449-0.018-3.070-0-5.57 2.499-5.57 5.572 0 0.322 0.043 0.631 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.605-0.565-3.068-1.479-4.25 0.911-0.994 1.479-2.302 1.479-3.75zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 0.035-0.066 0.078-0.125 0.113-0.189 0.352-0.642 0.785-1.23 1.292-1.753 1.443-1.495 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.379 0.353-0.145 0.729-0.238 1.117-0.301l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.338 1.314 0.836 1.79 1.449 0.656 0.845 1.065 1.897 1.065 3.051 0 2.762-2.238 5-5 5zM29.098 17.352c-1.155-0.841-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070-2.133 0-4.145 0.69-5.809 1.896 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.848 2.852-3.126 5.070-3.126s4.122 1.279 5.068 3.126c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.572 0 0.905-0.348 1.721-0.902 2.351z"></path>
					</svg>
					<h5>Night</h5>
				</div>
			);
		case "09n":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M25 4c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 16c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5zM14.063 30c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM6 24c0 1.105 0.894 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"></path>
					</svg>
					<h5>Night</h5>
				</div>
			);
		case "10n":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M26.065 4.425c-1.499-1.535-3.57-2.425-5.733-2.425-2.16 0-4.23 0.889-5.729 2.425-3.301 0.152-5.939 2.885-5.939 6.221 0 3.436 2.794 6.232 6.23 6.232 0.365 0 0.725-0.031 1.079-0.094 1.296 0.845 2.807 1.302 4.358 1.302 1.553 0 3.066-0.457 4.361-1.302 0.357 0.062 0.716 0.094 1.081 0.094 3.434 0 6.227-2.796 6.227-6.232-0-3.336-2.637-6.070-5.935-6.221zM25.773 14.878c-0.52 0-1.023-0.094-1.5-0.279-1.094 0.953-2.484 1.487-3.941 1.487-1.453 0-2.844-0.534-3.937-1.487-0.477 0.185-0.984 0.279-1.5 0.279-2.332 0-4.23-1.898-4.23-4.232 0-2.331 1.898-4.229 4.23-4.229 0.199 0 0.398 0.016 0.595 0.043 1.131-1.537 2.909-2.46 4.842-2.46s3.715 0.923 4.844 2.46c0.195-0.027 0.395-0.043 0.598-0.043 2.332 0 4.227 1.898 4.227 4.229 0 2.333-1.895 4.232-4.227 4.232zM9 16.043h-8c-0.552 0-1 0.447-1 1s0.448 1 1 1h8c0.552 0 1-0.447 1-1s-0.448-1-1-1zM1 14.043h4c0.552 0 1-0.447 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.447-1 1s0.448 1 1 1zM3 10.043h4c0.552 0 1-0.447 1-1s-0.448-1-1-1h-4c-0.552 0-1 0.447-1 1s0.448 1 1 1zM14 24c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"></path>
					</svg>
					<h5>Night</h5>
				</div>
			);
		case "11n":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M32 8.427c0-3.072-2.5-5.57-5.573-5.57-0.15 0-0.298 0.005-0.447 0.017-1.445-1.802-3.624-2.874-5.98-2.874-2.355 0-4.535 1.072-5.98 2.874-0.148-0.012-0.298-0.017-0.449-0.017-3.070 0-5.57 2.499-5.57 5.57 0 0.322 0.043 0.633 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.147 1 2.507 1.684 3.95 2.076l-1.432 0.956 2 2-2 4 6-4-2-2 0.301-0.599c2.297-0.070 4.484-0.921 6.217-2.432 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.604-0.565-3.068-1.479-4.25 0.911-0.992 1.479-2.301 1.479-3.75zM25 21.427c-1.070 0-2.057-0.344-2.871-0.915-1.188 1.431-2.859 2.421-4.764 2.758l-1.486 0.145c-2.426-0.039-4.566-1.164-6.008-2.902-0.813 0.572-1.801 0.915-2.871 0.915-2.762 0-5-2.237-5-5 0-2.76 2.238-5 5-5 0.676 0 1.316 0.138 1.902 0.38 0.035-0.068 0.078-0.125 0.113-0.19 0.352-0.642 0.785-1.229 1.292-1.753 1.443-1.493 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.38 0.353-0.146 0.729-0.24 1.117-0.302l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.339 1.314 0.836 1.79 1.45 0.656 0.845 1.065 1.896 1.065 3.050 0 2.763-2.238 5-5 5zM29.098 10.779c-1.155-0.84-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.543-4.814-4.070-8.013-4.070-2.133 0-4.145 0.691-5.809 1.897 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.849 2.852-3.128 5.070-3.128s4.122 1.279 5.068 3.128c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.57 0 0.906-0.348 1.723-0.902 2.352z"></path>
					</svg>
					<h5>Night</h5>
				</div>
			);
		case "13d":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M20.378 27.73l-1.125-0.648c0.034-0.195 0.060-0.394 0.060-0.602s-0.026-0.406-0.063-0.602l1.128-0.65c0.526-0.307 0.706-0.983 0.404-1.506-0.305-0.53-0.979-0.711-1.508-0.406l-1.137 0.656c-0.305-0.259-0.648-0.462-1.031-0.6v-1.306c0-0.611-0.496-1.105-1.105-1.105s-1.104 0.495-1.104 1.105v1.305c-0.383 0.137-0.728 0.342-1.033 0.602l-1.134-0.656c-0.53-0.305-1.206-0.125-1.51 0.405-0.305 0.526-0.121 1.203 0.406 1.508l1.122 0.648c-0.037 0.197-0.060 0.396-0.060 0.603s0.023 0.406 0.060 0.602l-1.122 0.648c-0.529 0.305-0.711 0.984-0.406 1.512s0.98 0.707 1.508 0.402l1.135-0.652c0.305 0.258 0.65 0.461 1.034 0.598v1.309c0 0.609 0.495 1.102 1.104 1.102s1.105-0.492 1.105-1.102v-1.309c0.383-0.137 0.73-0.34 1.033-0.602l1.135 0.656c0.529 0.305 1.203 0.125 1.508-0.402s0.125-1.203-0.404-1.512zM16 27.586c-0.609 0-1.105-0.496-1.105-1.105s0.496-1.103 1.105-1.103 1.104 0.494 1.104 1.103-0.495 1.105-1.104 1.105zM29.635 24.766l-0.755-0.201c-0.018-0.24-0.076-0.467-0.181-0.686l0.548-0.548c0.258-0.258 0.256-0.674 0-0.928-0.255-0.256-0.669-0.258-0.927 0l-0.549 0.547c-0.216-0.102-0.447-0.16-0.685-0.18l-0.201-0.754c-0.094-0.349-0.453-0.559-0.805-0.465-0.35 0.095-0.555 0.454-0.464 0.805l0.201 0.744c-0.099 0.068-0.193 0.143-0.281 0.229-0.086 0.089-0.159 0.182-0.227 0.279l-0.744-0.201c-0.35-0.094-0.712 0.117-0.806 0.465-0.094 0.352 0.117 0.71 0.464 0.805l0.75 0.202c0.021 0.236 0.081 0.466 0.186 0.685l-0.551 0.551c-0.255 0.256-0.254 0.671 0.003 0.926 0.255 0.255 0.669 0.258 0.924 0.003l0.552-0.552c0.216 0.107 0.448 0.167 0.688 0.185l0.198 0.751c0.096 0.35 0.453 0.559 0.805 0.465 0.349-0.094 0.56-0.453 0.466-0.807l-0.201-0.744c0.094-0.066 0.19-0.141 0.279-0.227 0.086-0.087 0.159-0.184 0.227-0.28l0.745 0.201c0.35 0.094 0.711-0.116 0.803-0.464 0.094-0.349-0.113-0.708-0.462-0.805zM27.395 25.184c-0.258 0.258-0.673 0.256-0.93 0-0.254-0.254-0.256-0.671 0-0.928 0.256-0.255 0.673-0.255 0.93 0 0.254 0.256 0.254 0.674 0 0.928zM7.434 21.406l-0.742 0.199c-0.069-0.094-0.141-0.189-0.228-0.277-0.088-0.086-0.182-0.16-0.28-0.227l0.199-0.746c0.094-0.35-0.115-0.711-0.461-0.803-0.352-0.094-0.711 0.115-0.805 0.464l-0.203 0.754c-0.238 0.020-0.466 0.078-0.684 0.181l-0.551-0.548c-0.258-0.258-0.672-0.256-0.927 0-0.256 0.256-0.256 0.672 0 0.928l0.548 0.548c-0.103 0.219-0.163 0.449-0.181 0.686l-0.753 0.201c-0.352 0.096-0.56 0.453-0.466 0.805 0.095 0.349 0.454 0.555 0.806 0.464l0.742-0.202c0.066 0.1 0.141 0.194 0.231 0.281 0.086 0.086 0.18 0.163 0.277 0.227l-0.199 0.744c-0.094 0.352 0.115 0.714 0.463 0.807 0.352 0.094 0.708-0.115 0.802-0.465l0.203-0.75c0.238-0.020 0.469-0.079 0.688-0.184l0.549 0.549c0.255 0.258 0.669 0.253 0.927-0.003 0.254-0.254 0.258-0.669 0-0.926l-0.551-0.551c0.106-0.216 0.168-0.449 0.184-0.688l0.754-0.199c0.348-0.095 0.556-0.453 0.462-0.805-0.094-0.348-0.453-0.556-0.806-0.465zM5.535 23.185c-0.256 0.256-0.672 0.256-0.93 0-0.254-0.255-0.254-0.673 0-0.927 0.258-0.255 0.673-0.255 0.93 0s0.254 0.672 0 0.927zM32 11c0-3.859-3.141-7-7-7-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7zM22.129 15.083c-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5c-1.070 0-2.057-0.344-2.871-0.917z"></path>
					</svg>
					<h5>Night</h5>
				</div>
			);

		case "50n":
			return (
				<div>
					<svg width="32" height="32" viewBox="0 0 32 32">
					<path d="M7 10h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM25 12h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM25 16h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1zM25 20h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1h18c0.552 0 1-0.448 1-1s-0.448-1-1-1z" />
					</svg>
					<h5>Night</h5>
				</div>
			);
		
	}
}

export let timeIcon = () => {
	return (
		<svg width="32" height="32" viewBox="0 0 32 32">
		<path d="M16 0c-8.837 0-16 7.164-16 16s7.163 16 16 16 16-7.164 16-16c0-8.836-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zM23 14h-5v-7c0-0.552-0.447-1-1-1h-2c-0.553 0-1 0.448-1 1v10c0 0.553 0.447 1 1 1h8c0.553 0 1-0.447 1-1v-2c0-0.553-0.447-1-1-1z"></path>
		</svg>
	);
}

export let coordinate = () => {
	return (
		<svg width="32" height="32" viewBox="0 0 32 32">
		<path d="M9.144 22.987l9.84-4.032 4.032-9.935-9.934 3.939-3.938 10.028zM16.029 14.029c1.104 0 2 0.896 2 2s-0.896 2-2 2-2-0.896-2-2 0.896-2 2-2zM16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16.112 28.021c-6.647 0-12.035-5.388-12.035-12.034s5.388-12.035 12.035-12.035c6.646 0 12.034 5.389 12.034 12.036s-5.387 12.033-12.034 12.033z"></path>
		</svg>
	);
}


export let wind = () => {
	return (
		<svg width="32" height="32" viewBox="0 0 32 32">
		<path d="M26.938 12c-1.656 0-3 1.344-3 3 0 0.353 0.073 0.685 0.184 1h-19.184c-0.552 0-1 0.448-1 1s0.448 1 1 1h22c1.656 0 3-1.344 3-3s-1.344-3-3-3zM4.938 14h12c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3c0 0.353 0.073 0.685 0.184 1h-9.184c-0.552 0-1 0.448-1 1s0.448 1 1 1zM20.938 20c-0.059 0-0.115 0.013-0.174 0.018-0.039-0.003-0.072-0.018-0.111-0.018h-15.428c-0.711 0-1.287 0.448-1.287 1s0.576 1 1.287 1h12.897c-0.111 0.315-0.184 0.648-0.184 1 0 1.656 1.344 3 3 3s3-1.344 3-3-1.344-3-3-3z"></path>
		</svg>
	);
}