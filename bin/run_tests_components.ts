import { walk } from '@std/fs/walk'

async function runAllTestsComponents() {
  for await (
    const entry of walk('src/components', { exts: ['_test.ts'] })
  ) {
    const commands = new Deno.Command(Deno.execPath(), {
      args: ['test', '-A', entry.path],
    })
    try {
      commands.spawn()
    } catch (error) {
      console.error(`Error running test: ${entry.path}`)
      console.error(error)
    }
  }
}

runAllTestsComponents()
