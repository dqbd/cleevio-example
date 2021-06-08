import { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

function ExampleComponent(props: Props) {
  return (
    <div css={{ padding: 16, border: "1px solid black" }}>{props.children}</div>
  )
}

export default function Page() {
  return (
    <div>
      <ExampleComponent css={{ background: "red" }}>
        I should be red!
      </ExampleComponent>
      <ExampleComponent css={{ background: "green" }}>
        I should be green!
      </ExampleComponent>
    </div>
  )
}
