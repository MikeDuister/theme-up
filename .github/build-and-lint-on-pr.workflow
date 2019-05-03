workflow "Build and lint on PR" {
  resolves = [
    "lint",
    "build",
  ]
  on = "pull_request"
}

action "lint" {
  uses = "uxt/actions-yarn@master"
  args = "lint"
}

action "build" {
  uses = "uxt/actions-yarn@master"
  args = "build"
}
