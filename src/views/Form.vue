<template>
	<div class="container d-flex justify-content-center p-4 mt-3 border rounded">
		<form @submit="submitHandler">
			<h1>Форма обратной связи</h1>
			 <div class="row mb-3">
			    <label for="email" class="col-sm-2 col-form-label">Email</label>
			    <div class="col-sm-10">
			      <input type="email" class="form-control" id="email" v-model="email">
			    </div>
			    <div class="invalid-feedback" v-if="error">
			        {{ error }}
			    </div>
			  </div>
             <div class="row mb-3">
			    <label for="name" class="col-sm-2 col-form-label">Имя</label>
			    <div class="col-sm-10">
			      <input type="text" class="form-control" id="name" v-model="name">
			    </div>
			    <div class="invalid-feedback" v-if="error">
			        {{ error }}
			    </div>
			  </div>
			    <div class="row mb-3">
			    <label for="surname" class="col-sm-2 col-form-label">Фамилия</label>
			    <div class="col-sm-10">
			      <input type="text" class="form-control" id="surname" v-model="surname">
			    </div>
			    <div class="invalid-feedback" v-if="error">
			        {{ error }}
			    </div>
			  </div>
			  <div class="row">
	            <div class="col" id="messageBlock">
	                <div class="form-group mt-3">
	                    <label for="text">Текст:</label>
	                    <textarea class="form-control" rows="3" name="text" id="text" v-model="text"></textarea>
	                </div>
	                <div class="invalid-feedback" v-if="error">
				        {{ error }}
				    </div>
	            </div>
	        </div>
	        <button type="submit" class="btn btn-primary m-3">Отправить</button>
		</form>
	</div>
</template>
<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				name: '',
				surname: '',
				email: '',
				text: ''
			}
		},
		methods: {
			submitHandler() {
				const formData = {
					name: this.name,
					surname: this.surname,
					email: this.email,
					text: this.text
				}

				axios.post('http://localhost:5000/api/send/send', formData);
			}
		},
		computed: {
			error() {
				if(this.email.trim.length <= 0)
					return 'Введите email';
				else if(this.name.trim.length <= 0)
					return 'Введите имя';
				else if(this.surname.trim.length <= 0)
					return 'Введите фамилию';
				else if(this.text.trim.length <= 0)
					return 'Введите текст';
				else
					return '';
			}
		}
	}
</script>