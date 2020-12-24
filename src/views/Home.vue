<template>
  <div class="home">
    <div class="container d-flex justify-content-center p-4 mt-3 border rounded">
	    <form action="/send" method="post" class="w-100" enctype="multipart/form-data">
	        <h1>Email рассылка</h1>

	        <div class="row d-flex align-items-center">
	            <div class="col">
	                <div class="form-check">
	                    <input class="form-check-input" type="radio" name="radioEmail" id="radioEmailText" checked @change="changeEmailType">
	                    <label class="form-check-label" for="radioEmailText">Вручную</label>
	                </div>
	                <div class="form-check">
	                    <input class="form-check-input" type="radio" name="radioEmail" id="radioEmailFile" @change="changeEmailType">
	                    <label class="form-check-label" for="radioEmailFile">Файл(.txt, .xlsx)</label>
	                </div>
	            </div>
	            <div class="col" id="emailBlock">
	                <div class="form-group mt-3" id="textEmailBlock">
                    	<label for="to">Email адреса:</label>
                        <input type="email" multiple class="form-control" name="to" id="to" required>
                        <small id="emailHelp" class="form-text text-muted">Например: "example@mail.ru, example1@gmail.com"</small>
               		</div>
	            </div>
	        </div>        

	        <div class="form-group mt-3">
	            <label for="subject">Тема:</label>
	            <input type="text" class="form-control" id="subject" name="subject" required>
	        </div>

	        <div class="form-check">
	            <input class="form-check-input" type="radio" name="radioMessage" id="radioMessageText" checked @change="changeMessageType">
	            <label class="form-check-label" for="radioMessageText">Текст</label>
	        </div>
	        <div class="form-check">
	            <input class="form-check-input" type="radio" name="radioMessage" id="radioMessageFile" @change="changeMessageType">
	            <label class="form-check-label" for="radioMessageFile">Файл(.html, стили и скрипты должны быть в одном файле.)</label>
	        </div>

	        <div class="row">
	            <div class="col" id="messageBlock">
	                <div class="form-group mt-3" id="textMessageBlock">
	                    <label for="text">Текст:</label>
	                    <textarea class="form-control" rows="3" name="text" id="text" required></textarea>
	                </div>
	            </div>
	        </div>

	        <button type="submit" class="btn btn-primary m-3">Отправить</button>

	        <p class="text-danger">
	            
	        </p>
	    </form>
	</div>
  </div>
</template>
<style>
	.custom-file-label::after {
		content: 'Выбрать';
	}
</style>
<script>
	export default {
		methods: {
			changeEmailType() {
				let fileEmailBlock = document.getElementById('fileEmailBlock');
				let textEmailBlock = document.getElementById('textEmailBlock');

				if(radioEmailText.checked) {
					if(fileEmailBlock)
						emailBlock.removeChild(fileEmailBlock);
					emailBlock.insertAdjacentHTML('afterbegin', '\
						<div class="form-group mt-3" id="textEmailBlock">\
	                    	<label for="to">Email адреса:</label>\
	                        <input type="email" multiple class="form-control" name="to" id="to" required>\
	                        <small id="emailHelp" class="form-text text-muted">Например: "example@mail.ru, example1@gmail.com"</small>\
	               		</div>\
	               	');
				} else {
					if(textEmailBlock)
						emailBlock.removeChild(textEmailBlock);
					emailBlock.insertAdjacentHTML('afterbegin', '\
	                	<div class="form-group mt-3" id="fileEmailBlock">\
						    <label for="to">Email адреса:</label>\
						    <input type="file" class="form-control-file" name="to" id="to" accept=".txt, .xlsx" required>\
						</div>\
	               	');
				}
			},
			changeMessageType() {
				let fileMessageBlock = document.getElementById('fileMessageBlock');
				let textMessageBlock = document.getElementById('textMessageBlock');

				if(radioMessageText.checked) {
					if(fileMessageBlock)
						messageBlock.removeChild(fileMessageBlock);
					messageBlock.insertAdjacentHTML('afterbegin', '\
						<div class="form-group mt-3" id="textMessageBlock">\
		                    <label for="text">Текст:</label>\
		                    <textarea class="form-control" rows="3" name="text" id="text" required></textarea>\
		                </div>\
	               	');
				} else {
	               	if(textMessageBlock)
						messageBlock.removeChild(textMessageBlock);
					messageBlock.insertAdjacentHTML('afterbegin', '\
	                	<div class="form-group mt-3" id="fileMessageBlock">\
						    <label for="html">Текст:</label>\
						    <input type="file" class="form-control-file" name="html" id="html" accept=".html" required>\
						</div>\
	               	');
				}
			}
		}
	}
</script>