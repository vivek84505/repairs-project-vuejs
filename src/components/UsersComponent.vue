<template>
  <div>
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Data Tables</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item">Tables</li>
            <li class="breadcrumb-item active">Data</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Title -->
      <UserFormComponent></UserFormComponent>
      <section class="section">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">User List</h5>

                <!-- Table with stripped rows -->
                <table class="table datatable">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>City</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="user in userlist" :key="user.id">
                      <th scope="row">{{ user.user_id }}</th>
                      <td>{{ user.firstname }} {{ user.lastname }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.mobile }}</td>
                      <td>{{ user.city }}</td>
                    </tr>
                  </tbody>
                </table>
                <!-- End Table with stripped rows -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- End #main -->
    <!-- End #main -->
  </div>
</template>

<script>
import UserFormComponent from "./UserFormComponent.vue";

import axios from "axios";
export default {
  components: {
    UserFormComponent: UserFormComponent,
  },
  data() {
    return {
      userlist: [],
      loading: false,
    };
  },
  methods: {
    getusers() {
      //let rthis = this;
      let userId = "";
      axios({
        method: "post",
        url: "http://localhost:8081/api/v1/users",
        data: { user_id: userId },
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          this.loading = true;
          if (response.status == 200) {
            const data = response.data.returnval;
            const results = [];
            for (const id in data) {
              results.push({
                user_id: data[id].user_id,
                firstname: data[id].firstname,
                lastname: data[id].lastname,
                email: data[id].email,
                mobile: data[id].mobile,
                user_role: data[id].user_role,
                city: data[id].city,
                address: data[id].address,
              });
              this.userlist = results.reverse();
            }
          }
        })
        .catch((error) => {
          console.log("error===>", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getusers();
  },
};
</script>

<style lang="scss" scoped></style>
