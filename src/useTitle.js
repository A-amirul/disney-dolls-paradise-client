import { useEffect } from "react"

const useTitle = title => {
	useEffect(() => {
		document.title = `Disney Dolls Paradise | ${title}`;
	},[title])
}

export default useTitle;