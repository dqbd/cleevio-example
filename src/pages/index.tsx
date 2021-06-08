import { css } from "@emotion/react"
import Link from "next/link"

export default function Page() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 16px;
      `}
    >
      <Link href="/optimalization" passHref>
        <a>Optimalization Question</a>
      </Link>

      <Link href="/styling" passHref>
        <a>Styling Question</a>
      </Link>

      <Link href="/typing" passHref>
        <a>TypeScript Question</a>
      </Link>
    </div>
  )
}
