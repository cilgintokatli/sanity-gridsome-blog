<template>
  <Layout>
    <div>
        <form
            name="contact"
            method="post"
            v-on:submit.prevent="handleSubmit"
            action="/iletisim/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            netlify
            >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
                <label>
                Don’t fill this out: <input name="bot-field" />
                </label>
            </p>
            <div class="sender-info">
                <div>
                <label for="name" class="label" >İsim</label>
                <input type="text" name="name" v-model="formData.name" />
                </div>
                <div>
                <label for="email">E mail</label>
                <input type="email" name="email" v-model="formData.email" />
                </div>
            </div>

            <div class="message-wrapper">
                <label for="message">Mesaj</label>
                <textarea name="message" v-model="formData.message"></textarea>
            </div>

            <button type="submit">Gönder</button>
        </form>

    </div>
  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'İletişim'
  },
  data() {
        return {
            formData: {},
        }
    },
    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        },
        handleSubmit(e) {
            fetch('/iletisim', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: this.encode({
                    'form-name': e.target.getAttribute('name'),
                    ...this.formData,
                }),
            })
            .then(() => console.log('Form successfully submitted'))
            .catch(error => alert(error))
        }
    },
}
</script>
