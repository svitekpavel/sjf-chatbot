// Terms
// - Intent - understand what user wants
// - Entities - pieces of information we want to collect
// - Utterance - phrases used to express intent + entities

export function getIntent(messageFromUser) {
  if (messageFromUser.includes('book a room')) {
    return 'BOOK_ROOM'
  }
}

export function getIntentAndEntities(messageFromUser) {
  const messageInWords = messageFromUser.split(' ')
  if (getIntent(messageFromUser) === 'BOOK_ROOM') {
    // Example:
    // messageFromUser: I want to book a room tommorrow at 6pm
    // messageInWords: ['I', 'want', 'to', 'book', 'a', 'room', 'tomorrow', 'at', '6pm']
    const entityIndexRoom = messageInWords.indexOf('room')
    const bookingDate = messageInWords[entityIndexRoom + 1]
    const entityIndexAt = messageInWords.indexOf('at')
    const bookingTime = messageInWords[entityIndexAt + 1]

    return {
      intent: 'BOOK_ROOM',
      entities: {
        bookingDate,
        bookingTime,
      },
    }
  }

  return null
}
