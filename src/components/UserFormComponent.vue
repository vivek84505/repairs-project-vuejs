<template>
  <div>
    <button
      class="btn-primary add-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#add-userform"
      aria-expanded="false"
      aria-controls="add-userform"
    >
      Add User
    </button>

    <div
      id="add-userform"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
      style=""
    >
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Add New User</h5>

              <!-- Browser Default Validation -->
              <form class="row g-3">
                <div class="col-md-4">
                  <label for="validationDefault01" class="form-label"
                    >First name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault01"
                    value="John"
                    required=""
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationDefault02" class="form-label"
                    >Last name</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    value="Doe"
                    required=""
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationDefault02" class="form-label"
                    >Email</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    value="Doe"
                    required=""
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationDefault02" class="form-label"
                    >Mobile</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    value="Doe"
                    required=""
                  />
                </div>

                <div class="col-md-4">
                  <label for="validationDefault04" class="form-label"
                    >State</label
                  >
                  <select
                    class="form-select"
                    id="validationDefault04"
                    required=""
                  >
                    <option selected="" disabled="" value="">Choose...</option>
                    <option>...</option>
                  </select>
                </div>

                <div class="col-md-4">
                  <label for="validationDefault04" class="form-label"
                    >City</label
                  >
                  <select
                    class="form-select"
                    id="validationDefault04"
                    required=""
                  >
                    <option selected="" disabled="" value="">Choose...</option>
                    <option>...</option>
                  </select>
                </div>

                <div class="col-12">
                  <button class="btn btn-primary add-button" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
              <!-- End Browser Default Validation -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
