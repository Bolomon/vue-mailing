<template>
	<div>
		<div
			class="container d-flex flex-wrap justify-content-center p-4 mt-3 border rounded"
			v-for="message in messages" :key="message.message">
			<div class="card" style="width: 18rem;" :id="message._id">
			  <div class="card-body">
			    <h5 class="card-title name">{{ message.name }}</h5>
			    <h5 class="card-title surname">{{ message.surname }}</h5>
			    <p class="card-text">{{ message.text }}</p>
			    <button class="btn btn-primary mr-1" @click="editHandler(message._id)">Изменить</button>
			    <button class="btn btn-danger" @click="deleteHandler(message._id)">Удалить</button>
			  </div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				messages: []
			}
		},
		async mounted() {
			const data = await axios.get('http://localhost:5000/api/test/show');

			this.messages = data.data.data;
		},
		methods: {
			async editHandler(id) {
				const block = document.getElementById(id);
				if(block.querySelector('.card-title').contentEditable == 'inherit' || block.querySelector('.card-title').contentEditable == 'false') {
					block.querySelector('.card-title.name').contentEditable = true;
					block.querySelector('.card-title.name').classList.add('border');
					block.querySelector('.card-title.surname').contentEditable = true;
					block.querySelector('.card-title.surname').classList.add('border');
					block.querySelector('.card-text').contentEditable = true;
					block.querySelector('.card-text').classList.add('border');
					block.querySelector('.btn-primary').innerHTML = 'Сохранить';	
				} else {
					block.querySelector('.card-title.name').contentEditable = false;
					block.querySelector('.card-title.name').classList.remove('border');
					block.querySelector('.card-title.surname').contentEditable = false;
					block.querySelector('.card-title.surname').classList.remove('border');
					block.querySelector('.card-text').contentEditable = false;
					block.querySelector('.card-text').classList.remove('border');
					block.querySelector('.btn-primary').innerHTML = 'Изменить';
					await axios.post(`http://localhost:5000/api/test/update/${id}`, {
						name: block.querySelector('.card-title.name').innerHTML,
						surname: block.querySelector('.card-title.surname').innerHTML,
						text: block.querySelector('.card-text').innerHTML
					});

					const data = await axios.get('http://localhost:5000/api/test/show');
					this.messages = data.data.data;
				}
			},
			async deleteHandler(id) {
				await axios.get(`http://localhost:5000/api/test/delete/${id}`);
				
				const data = await axios.get('http://localhost:5000/api/test/show');

				this.messages = data.data.data;
			}
		}
	}
</script>