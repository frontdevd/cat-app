import React, {Dispatch, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCategoriesApi, setCategory} from '../../redux/actions/categories/categories'
import {getCatsApi, loadMoreApi} from '../../redux/actions/cats/cats'
import {CardSkeleton, Categories, CategorySkeleton, Contents} from '../index'
import {Aside, Content, LoadMoreWrapper, Main, Wrapper} from '../../styled'

const Layout: React.FC<any> = () => {
	const dispatch: Dispatch<any> = useDispatch()
	
	const categories: [any] = useSelector((state: any) => state.categories.items)
	const activeCategory: any = useSelector((state: any) => state.categories.activeCategory)
	const currentPage: number = useSelector((state: any) => state.cats.currentPage)
	const cats: [any] = useSelector((state: any) => state.cats.items)
	
	const loadMoreHandler = () => dispatch(loadMoreApi(activeCat, currentPage))
	const handleWindowWidth = () => setWidth(window.innerWidth)
	
	const [loader, setLoader] = useState<boolean>(false)
	const [activeCat, setActiveCat] = useState<number>(activeCategory)
	const [width, setWidth] = useState<number>(window.innerWidth)
	
	useEffect(() => dispatch(getCatsApi(activeCat)), [activeCat])
	useEffect(() => dispatch(getCategoriesApi()), [])
	useEffect(() => {
		window.addEventListener('resize', handleWindowWidth)
		return () => window.removeEventListener('resize', handleWindowWidth)
	}, [])
	
	const categoryHander = (id: any) => {
		setActiveCat(id)
		dispatch(setCategory(id))
		setLoader(true)
		setTimeout(() => setLoader(false), 400)
	}
	
	let isMobile: boolean = (width <= 991)
	
	return (
		<>
			<Content>
				<Wrapper>
					<Aside>
						{categories && categories.length > 0
							? <Categories categoryHander={categoryHander} items={categories}/>
							: isMobile ? '' : <CategorySkeleton/>
						}
					</Aside>
					<Main>
						{loader ? <CardSkeleton/>
							: cats && cats.length > 0
								? <Contents items={cats}/>
								: <CardSkeleton/>
						}
					</Main>
				</Wrapper>
			
			</Content>
			<LoadMoreWrapper>
				<button className='btn-pink' onClick={loadMoreHandler}>load more cats</button>
			</LoadMoreWrapper>
		</>
	)
}

export default Layout
