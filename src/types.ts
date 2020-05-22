export type User = {
	id: string
	firstName: string
	lastName: string
	profilePicture: string
}

export type Message = {
	id: string
	messageOwner: User
	timeSent: number
	content: string
}

export type Thread = {
	id: string
	message: Message
	replies: Message[]
}

export type State = {
	status: string
	thread: Thread
}
