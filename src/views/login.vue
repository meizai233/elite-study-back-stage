<script lang="ts" setup>
const formState = $ref({
  phone: '',
  password: '',
});

</script>

<template>
  <div flex="~ center" h-full class="login">
    <!-- 蒙层 -->
    <div w-170 h-100 op70 absolute bg="#f2f2f2" rounded-5 />
    <!-- form表单 -->
    <div z-10 flex="~ v-center col" w-170 h-100 pt-10 px-35>
      <h1 relative text="10 #2580ec" font-bold class="title">欢迎登录</h1>
      <div w-full flex="~ v-center" justify-between relative>
        <UserOutlined absolute text="5 #c0c0c0!" bottom="2.5" left="2.6" />
        <input class="input" placeholder="请输入账号" v-model="formState.phone" />
      </div>
      <div w-full flex="~ v-center" justify-between relative>
        <LockOutlined absolute text="5 #c0c0c0!" bottom="2.5" left="2.6" />
        <input class="input" type="password" placeholder="请输入密码" v-model="formState.password" />
      </div>
      <button bg="#2580ec" text="7 white" w-full mt-10 hover:bg="blue" transition-all>登录</button>
    </div>
  </div>
</template>

<style scoped>
.login {
  background: url(../assets/image/background_login.png) no-repeat;
}

.input {
  width: 100%;
  height: 40px;
  border: 1px solid #aaaaaa;
  background-color: white;
  font-size: 18px;
  padding-inline: 35px;
  margin-top: 25px;
  outline: none;
}

.title::after {
  content: '';
  position: absolute;
  left: 110%;
  top: calc(2.5rem - 10px);
  width: 80px;
  height: 3px;
  background-color: #2580ec;
}

.title::before {
  content: '';
  position: absolute;
  right: 110%;
  top: calc(2.5rem - 10px);
  width: 80px;
  height: 3px;
  background-color: #2580ec;
}
</style>