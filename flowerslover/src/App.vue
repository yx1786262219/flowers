<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapstate, mapActions } from "vuex";
export default {
  name: "App",
  created() {
    var _this = this,
      routerObj = _this.$router;
    console.log(_this);
    console.log(routerObj);

    if (routerObj.currentRouted) {
      _this.SetTitleByName(routerObj.currentRoute.name);
    }
    routerObj.beforeEach((to, from, next) => {
      _this.SetTitleByName(to.name);
      next();
    });
  },
  methods: {
    ...mapActions(["SetTitle"]),
    SetTitleByName(routerName) {
      console.log("1");

      var obj = this.$router.options.routes.find(function(s) {
        return s.name === routerName;
      });
      if (obj) {
        var title = obj.title;
        console.log(title + ",,,,,标题");
        this.SetTitle(title);
      }
    }
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
