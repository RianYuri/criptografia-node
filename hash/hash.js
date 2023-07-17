import {createHash} from 'crypto'

const createHash = () =>{
    return createHash('sha256').update(senha).digest('hex')
}