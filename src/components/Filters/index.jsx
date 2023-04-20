const Filters = ( {filterCategory}  ) => {

    const categorys = ['Все расходы', 'Путешествия', 'Развлечения', 'Образование', 'Еда', 'Одежда', 'Коммунальные платежи', 'Авто', 'Прочие расходы'] 

    return(
        <div className="bg-emerald-50 m-8 text-stone-600 border border-transparent drop-shadow-xl rounded-2xl p-4 flex justify-center items-center flex-col md:flex-row">
            <p className="pr-8">Посмотреть расходы по категории: </p>
            <select onChange={(event) => filterCategory(event.target.value)} className="text-stone-600 border border-transparent drop-shadow-xl rounded-2xl text-center py-1">
                {categorys.map(category => (
                    <option key={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default Filters