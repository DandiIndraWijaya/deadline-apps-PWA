import React from 'react';
import Screen from '../components/Screen/Screen';
import Header from '../components/Header/Header';
import DeadlineForm from '../components/DeadlineForm/DeadlineForm';
import Deadline from '../components/Deadline/Deadline';



class DeadLineList extends React.Component{
    render(){
        return (
            <Screen>
                <Header />
                <DeadlineForm />
                <hr/>
                <Deadline />
            </Screen>
            // <div className="screen">
            //      <header>
            //         <h1>Tugas Kuliah Saya</h1>
            //     </header>

            //     <div className="container">
                    
            //             <div className="item">
            //                 <label for="matkul">Mata Kuliah</label>
            //                 <br></br>
            //                 <input type="text" id="matkul" required></input>
            //             </div>

            //             <div className="item">
            //                 <label for="tugas">Tugas</label>
            //                 <br></br>
            //                 <input type="text" id="tugas" required></input>
            //             </div>

            //             <div className="item">
            //                 <label for="tugas">Deadline</label>
            //                 <br></br>
            //                 <input type="text" id="tugas" required></input>
            //             </div>

            //             <div className="item">
            //                 <input type="submit" className="tambah-btn" value="Tambah"></input>
            //             </div>
            //     </div>

                
            //     <div className="deadlineList">
            //         <table>
            //             <thead>
            //                 <tr>
            //                     <th>Mata Kuliah</th>
            //                     <th>Sisa Waktu</th>
            //                     <th>Aksi</th>
            //                 </tr>
            //             </thead>

            //             <tbody>
            //                 <tr>
            //                     <td>Pemrograman Web</td>
            //                     <td>27 Hari 25 Jam 10 Menit 57 Detik</td>
            //                     <td><a href="">detail </a> | <a href=""> hapus</a></td>
            //                 </tr>
            //                 <tr>
            //                     <td>Pemrograman Web</td>
            //                     <td>27 Hari 25 Jam 10 Menit 57 Detik</td>
            //                     <td><a href="">detail </a> | <a href=""> hapus</a></td>
            //                 </tr>
            //             </tbody>
            //         </table>
            //     </div>
            // </div>
        )
    }
}


export default DeadLineList;