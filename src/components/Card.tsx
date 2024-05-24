import dayjs from "dayjs"

interface CardProps {
  profileSrc: string
  name: string
  create?: string
  imageContent?: string
  header?: string
  content?: string
}

const Card = ({profileSrc, name, create, imageContent, header, content}:CardProps) => {
  const date = dayjs(create).format('dddd, MMMM D, YYYY, HH:mm ')
  return (
    <div className="min-w-[990px] min-h-[250px] bg-white even:bg-[#ccecff] shadow-md">
      
      <div className="post h-10 w-full flex items-center gap-x-1 px-4 py-2 border-b border-solid border-[#bfdaea]">
        <div className="w-6 h-6 flex items-center justify-center">
          <img className="rounded-full" src={profileSrc} alt={name} />
        </div>
        <div className="flex items-center gap-x-1">
          <div className="flex items-center text-[#f93909]">{name}</div>
          <div className="flex items-center text-[#728392]">posted on {date}</div>
        </div>
      </div>

      <div className="flex items-start px-4 py-4 gap-x-4">
        <img className="w-[240px] h-[180px]" src={imageContent} alt="" />
        <div className="flex flex-col">
          <div className="flex items-center justify-start text-[20px] font-[700] text-[#01040d]">{header}</div>
          <div className="flex items-center justify-start text-start text-wrap">{content}</div>
        </div>
      </div>  
    </div>
  )
}

export default Card
