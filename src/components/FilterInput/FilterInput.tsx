import { useState } from 'react'
import * as styles from './FilterInput.css'
const FilterInput = () => {
  const [istouched, setIstouched] = useState<boolean>(false)

  return istouched ? (
    <div>입력</div>
  ) : (
    <div className={styles.OuterContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="12" cy="12" r="10" fill="#777777" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.5 15.6C11.5 15.8762 11.7239 16.1 12 16.1C12.2762 16.1 12.5 15.8762 12.5 15.6V12.5H15.6C15.8762 12.5 16.1 12.2762 16.1 12C16.1 11.7239 15.8762 11.5 15.6 11.5H12.5V8.40002C12.5 8.12388 12.2762 7.90002 12 7.90002C11.7239 7.90002 11.5 8.12388 11.5 8.40002V11.5H8.40002C8.12388 11.5 7.90002 11.7239 7.90002 12C7.90002 12.2762 8.12388 12.5 8.40002 12.5H11.5V15.6Z"
          fill="#212121"
        />
      </svg>
      직접입력
    </div>
  )
}
export default FilterInput