import React from 'react';
import style from './Lista.module.scss';
import Item from './Item';

function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
    return (
        <aside className={style.listaTarefa}>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item 
                        tarefa={item.tarefa} 
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;