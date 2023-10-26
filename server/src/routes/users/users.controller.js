
const getUsers = ()=> {
    return( [{
    id: '14253',
    name : 'jamiu'
}])
}

export async function httpGetUsers(req, res) {
    return res.status(200).json(await getUsers());
  }