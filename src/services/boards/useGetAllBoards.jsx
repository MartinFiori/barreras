import { errorMessage } from '../../utils/returnMessages'
import connection from '../../utils/connection'
import config from '../../config/config'
const { URL } = config

export async function useGetAllBoards() {
  try {
    const response = await connection({ method: 'GET', url: URL.BARRERAS_URL + '/boards' })
    const boards = await response.json()
    const boardsName = boards.map(board => ({ id: board._id, name: board.name }))
    return boardsName;
  } catch (err) {
    return errorMessage(err.message)
  }
}


