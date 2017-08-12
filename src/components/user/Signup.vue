<template>
  <div>
    <h1>
        Signup
    </h1>
    <form @submit.prevent="onSignup">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" v-model="email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox"> Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
    <h1>{{note}}</h1>
  </div>
</template>

<script>
export default {
  data (){
    return {
      email: "",
      password: "",
      note: null
    }
  },
  methods: {
    onSignup () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
  },
  created(){
    this.$http.get('/note').then((response)=>{
      this.note = response.body.name + response.status
    },(err)=>{
      this.note = err
    });
  }
}
</script>

<style>

</style>
