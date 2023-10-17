export default function CardBigImg (props){
	const {bigImg} = props;
	return(
		<>
			<img src={bigImg} alt="" className="big-img-set" />
		</>
	)
}