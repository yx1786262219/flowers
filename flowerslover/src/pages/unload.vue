<template>
  <div class="unload">
    <toast
      v-model="showPositionValue"
      type="text"
      :time="800"
      is-show-mask
      :text="tip_text"
      :position="position"
    >123</toast>
    <div v-transfer-dom>
      <loading
        :show="isshow"
        text=""
      ></loading>
    </div>
    <transition
      name="logo"
      v-if="login"
    >
      <div
        style="height: 15%;"
        v-show="change"
      ></div>
    </transition>

    <transition
      name="logo"
      v-if="login"
    >
      <div class="logo">
        <i class="iconfont icon-shuidi shuidi_color"></i>
        <h5 class="gray">FlowersLover</h5>
      </div>
    </transition>
    <transition
      name="form"
      v-if="form_show"
    >
      <div class="banner">
        <div class="form">
          <input
            type="text"
            maxlength="12"
            minlength="6"
            v-model="username"
          >
        </div>
        <div class="form">
          <input
            :type="showPass==1?'password':'text'"
            maxlength="12"
            minlength="6"
            v-model="password"
          >
          <img
            src="../assets/show.png"
            alt=""
            v-show="isShow"
            @click="look"
          >
          <div
            class="line"
            v-show="isShow && showPass"
          ></div>
        </div>

        <div
          class="form btn_color layout"
          @click="Coming(1)"
          v-if="login==1"
        >
          <h4 class="white">Coming In</h4>
        </div>
        <div
          class="form btn_color layout"
          @click="Coming(0)"
          v-if="login==0"
        >
          <h4 class="white">注册</h4>
        </div>
        <div class="tip layout">
          <h6
            class="gray"
            @click="toRejister(1)"
            v-if="login==1"
          >Forgot your password ?</h6>
          <h6
            class="gray"
            @click="toRejister(0)"
            v-if="login==0"
          >已有账号？点击进行登陆。</h6>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import "../assets/font/iconfont.css";
import { mapState, mapActions } from "vuex";
import { Toast, Loading, TransferDomDirective as TransferDom } from "vux";
export default {
  name: "unload",
  directives: {
    TransferDom
  },
  components: {
    Toast,
    Loading
  },
  data() {
    return {
      username: "",
      password: "",
      isShow: 0, //密码旁眼睛的图片
      showPass: 1, //密码的显示隐藏
      change: 1, //高度变化时，logo去上边距
      clientHeight: "", //屏幕高度
      login: 1, //控制登陆页面显隐
      form_show: 1, //表单动画控制
      tip_text: "", //提示信息
      position: "default",
      showPositionValue: false,
      click: 0, //点击次数
      isshow: false //loading状态
    };
  },
  mounted() {
    let _this = this;
    this.clientHeight = document.documentElement.clientHeight;
    const that = this;
    window.onresize = function() {
      if (document.documentElement.clientHeight < that.clientHeight) {
        that.change = 0;
      } else {
        that.change = 1;
      }
    };
  },
  watch: {
    password(val, old) {
      let _this = this;
      if (val.length > 0) {
        _this.isShow = 1;
      } else if (val.length == 0) {
        _this.isShow = 0;
        _this.showPass = 1;
      }
    }
  },
  methods: {
    ...mapActions(["CheckUser"]),
    Coming(a) {
      let _this = this;

      this.click++;
      if (_this.click > 10) {
        return _this.tip("屏幕不怕点烂吗？");
      }
      if (_this.username.length < 6) {
        return _this.tip("请输入正确的用户名!");
      }
      if (_this.password.length < 6) {
        return _this.tip("请输入正确的密码!");
      }
      _this.isshow = true;
      if (a) {
        _this.CheckUser({
          username: _this.username,
          password: _this.password,
          success: res => {
            _this.isshow = false;
            console.log(res);
            if (res.message == "用户名或密码错误!") {
              return _this.tip(res.message);
            }
          }
        });
      } else {
        _this.isshow = false;
        _this.tip("请求失败");
      }
      // var data = {
      //   username: _this.username,
      //   password: _this.password,
      // }
      // axios.post('http://172.16.11.42:5000/CheckUser', data).then(res => {
      //   console.log(res)
      // })
    },
    //跳转注册
    toRejister(a) {
      let _this = this;
      if (a) {
        _this.login = 0;
        _this.form_show = 0;
        setTimeout(() => {
          _this.form_show = 1;
        }, 500);
      } else {
        _this.login = 1;
      }
    },
    look() {
      let _this = this;
      if (_this.showPass == 0) {
        _this.showPass = 1;
      } else {
        _this.showPass = 0;
      }
    },
    //提示
    tip(a, b) {
      let _this = this;
      this.tip_text = a;
      if (b) {
        this.position = b;
      }

      this.showPositionValue = true;
    }
  }
};
function tick(i, cb) {
  setTimeout(function() {
    i++;
    cb(i);
    if (i < 100) {
      tick(i, cb);
    }
  }, 10);
}
</script>
<style lang="less" scoped>
.gray {
  color: #7b8698;
}
h5 {
  font-size: 20px;
}
h4 {
  font-size: 18px;
}
h6 {
  font-size: 16px;
}
.btn_color {
  background: linear-gradient(to right, #75dd9e, #55c7ec) !important;
}
.white {
  color: #dcffff;
}
.layout {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-leave-active {
  transition: all 0.5s;
}
.logo-leave-to {
  transform: translateY(-100%);
}

.form-leave-active {
  transition: all 0.5s;
}
.form-leave-to {
  transform: translateY(-140px);
}

.unload {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(#475363, #333c4d);
}
.shuidi_color {
  background: linear-gradient(to right, #78d39a, #52c7f3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 124px;
}
.logo {
  text-align: center;
}
.banner {
  height: 100%;
  margin-top: 10%;
}
.form {
  width: 84%;
  height: 46px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 5%;
  border-radius: 25px;
  position: relative;
  img {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    width: 31px;
  }
  .line {
    width: 36px;
    height: 1.5px;
    position: absolute;
    top: 50%;
    right: 4%;
    transform: translateY(-50%) rotateZ(-45deg);
    background-color: #7b8698;
  }
  input {
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    border: 0;
    margin-left: 10%;
    outline: none;
    text-align: center;
    font-size: 20px;
  }
}
.tip {
  margin-top: 6%;
}
</style>

