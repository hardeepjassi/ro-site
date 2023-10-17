export default function CardSmlImg(props){
	const {smlImg} = props;
	return(
		<>
			<img src={smlImg} alt="" className=" mt-2 smlImgSet"/>
		</>
	)
}