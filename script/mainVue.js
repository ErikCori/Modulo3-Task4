Vue.component('partido', {
	props: ['date', 'times', 'teams', 'location', 'url'],
	template: `
		<tr>
			<td>{{date}} {{times}}</td>
			<td>{{teams}}</td>	
			<td><a v-bind:href= "url">{{location}}</a></td>
		</tr>
	`,
})

var app = new Vue({
	el: '#app',
	data: {
		section: "home",
		partidos: [],
		detailedMatch: null,
		logged:false,
		forumPosts:[],

	},
	methods: {
		selectPlace(url, index) {
			$("#map-selected").attr("src", url);
			$(".btn-place-class").removeClass("actualClass");
			$("#btn-place" + index).addClass("actualClass");
		},
		matchDetails(id){
			for(let i in this.partidos){
				if(this.partidos[i].matchId == id){
					this.detailedMatch = this.partidos[i]
				}
			}
		},
		mForum(id){
			cleanupUi();
        	startDatabaseQueries();
		}
	}
})

app.partidos = data.partidos;

function cambiarSection(nuevaSeccion) {
	app.section = nuevaSeccion;
}