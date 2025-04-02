<script lang="ts" setup>
import type { CommandMenu, Layout, Navigation, NavItem } from '@provetcloud/web-components'

const layout = useTemplateRef<Layout>('layout')
const commandMenu = useTemplateRef<CommandMenu>('command-menu')
const navigation = useTemplateRef<Navigation>('navigation')

function onNavigationClick(e: MouseEvent) {
  // @ts-expect-error - We are using a custom element
  if (e.target.matches('provet-nav-item') && e.target.href) {
    const target = e.target as NavItem
    target.active = true
  }
}

onMounted(() => {
  if (!layout.value || !commandMenu.value) {
    return
  }

  commandMenu.value.commands = [
    {
      id: 'toggle-nav',
      title: 'Toggle navigation',
      icon: 'navigation-toggle',
      shortcut: 'Alt+KeyL',
      handler() {
        if (!layout.value) {
          return
        }

        layout.value.navOpen = !layout.value.navOpen
      },
    },
  ]
})
</script>

<template>
  <provet-layout ref="layout">
    <provet-navigation ref="navigation" slot="nav" @click="onNavigationClick">
      <provet-dropdown slot="header" expand>
        <provet-button slot="toggle" expand>
          <provet-avatar slot="start" name="Bath Clinic" variant="square">
            B
          </provet-avatar>
          Bath Clinic
        </provet-button>
        <provet-dropdown-group heading="laura.williams@nordhealth.com">
          <provet-dropdown-item>
            <provet-avatar slot="start" name="Bath Clinic" size="s" variant="square">
              B
            </provet-avatar>
            Bath Clinic
            <provet-icon slot="end" name="interface-checked" />
          </provet-dropdown-item>
          <provet-dropdown-item>
            <provet-avatar
              slot="start"
              name="Ocean Beach Clinic"
              size="s"
              variant="square"
              style="--n-avatar-color: var(--n-color-status-success)"
            >
              O
            </provet-avatar>
            Ocean Beach Clinic
          </provet-dropdown-item>
          <provet-dropdown-item>
            <provet-avatar
              slot="start"
              name="Park Animal Hospital"
              size="s"
              variant="square"
              style="--n-avatar-color: var(--n-color-status-highlight)"
            >
              P
            </provet-avatar>
            Park Animal Hospital
          </provet-dropdown-item>
          <provet-dropdown-item>
            <provet-avatar
              slot="start"
              name="Balboa Pet Hospital"
              size="s"
              variant="square"
              style="--n-avatar-color: var(--n-color-status-danger)"
            >
              B
            </provet-avatar>
            Balboa Pet Hospital
          </provet-dropdown-item>
        </provet-dropdown-group>
        <provet-dropdown-group>
          <provet-dropdown-item>Add another clinic</provet-dropdown-item>
          <provet-dropdown-item>Customize style</provet-dropdown-item>
        </provet-dropdown-group>
        <provet-dropdown-item>Sign out from all clinics</provet-dropdown-item>
      </provet-dropdown>
      <provet-nav-group heading="Workspace">
        <provet-nav-item href="#" active icon="navigation-dashboard">
          Dashboard
        </provet-nav-item>
        <provet-nav-item icon="navigation-payments">
          Payments
          <provet-nav-group slot="subnav">
            <provet-nav-item href="#">
              All transactions
            </provet-nav-item>
            <provet-nav-item href="#">
              Payments
            </provet-nav-item>
            <provet-nav-item href="#">
              Disputes
            </provet-nav-item>
          </provet-nav-group>
        </provet-nav-item>
        <provet-nav-item icon="navigation-reports">
          Reports
          <provet-nav-group slot="subnav">
            <provet-nav-item href="#">
              Payments
            </provet-nav-item>
            <provet-nav-item href="#">
              Disputes
            </provet-nav-item>
            <provet-nav-item href="#">
              Payouts
            </provet-nav-item>
          </provet-nav-group>
        </provet-nav-item>
        <provet-nav-item href="#" icon="navigation-settings">
          Settings
        </provet-nav-item>
      </provet-nav-group>
      <provet-dropdown slot="footer" expand>
        <provet-button slot="toggle" expand>
          <provet-avatar slot="start" aria-hidden="true" name="Laura Williams" />
          Laura Williams
        </provet-button>
        <provet-dropdown-group>
          <provet-dropdown-item href="#">
            View profile
          </provet-dropdown-item>
          <provet-dropdown-item>Settings</provet-dropdown-item>
        </provet-dropdown-group>
        <provet-dropdown-group>
          <provet-dropdown-item>
            Show keyboard shortcuts
            <div slot="end" class="n-color-text-weaker n-font-size-xs">
              Cmd+K
            </div>
          </provet-dropdown-item>
          <provet-dropdown-item>Help & Support</provet-dropdown-item>
          <provet-dropdown-item>API</provet-dropdown-item>
        </provet-dropdown-group>
        <provet-dropdown-item>
          Sign out
          <provet-icon slot="end" name="interface-logout" />
        </provet-dropdown-item>
      </provet-dropdown>
    </provet-navigation>
    <provet-header slot="header">
      <h1 class="n-typescale-l">
        Dashboard
      </h1>
      <provet-button slot="end" variant="primary">
        <provet-icon slot="start" name="interface-add-small" />
        Create new
      </provet-button>
      <provet-tooltip id="export" position="block-end">
        Export data as Spreadsheet
      </provet-tooltip>
    </provet-header>

    <slot />
  </provet-layout>
  <provet-command-menu ref="command-menu" />
</template>
