interface Args {
  type: string
  path: string
}

declare function create(args: Args): void

export default create