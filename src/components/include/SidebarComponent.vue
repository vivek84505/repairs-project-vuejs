<template>
  <div>
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <!-- Start Dashboard Nav -->
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-grid"></i>
            <router-link to="/">Dashboard</router-link>
          </a>
        </li>
        <!-- End Dashboard Nav -->

        <!-- Start Users Nav -->

        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="bi bi-diagram-3"></i>

            <router-link to="/users">Users Management</router-link>
          </a>
        </li>

        <!-- End Users Nav -->

        <li class="nav-item">
          <a
            class="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-menu-button-wide"></i><span>Master</span
            ><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="components-alerts.html">
                <i class="bi bi-circle"></i><span>Alerts</span>
              </a>
            </li>
          </ul>
        </li>
        <!-- End Components Nav -->
      </ul>
    </aside>
    <!-- End Sidebar-->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
