import React from 'react';

const Navbar = () => {

	function logo() {
	  	return (
			<a href="/">
				<div className="flex items-center gap-4">
			<img
	  			className="h-[50px]"
		  		src="https://cdn-icons-png.flaticon.com/512/2065/2065203.png"
		 	/>
			<span className="font-medium text-3xl">SOCIALSITE</span>
			</div>
			</a>
		);
	}

	function menu() {

		const items = ["FEED", "POST"];

		return (
				<nav className="flex items-center font-bold">
					<ul>
						{ 
							items.map(
								(item) => (
								<a href={item === "FEED" ? "/" : item.toLocaleLowerCase()}>
								<li key={item} 
									className="bg-gradient-to-b to-[#D76A03] from-[#EC9F05] border-solid border-[#FFFBEC] border-2 
												hover:border-[#BF3100] hover:text-[#BF3100] transition-all transition-500
											text-[#FFFBEC] inline mx-2 py-2 px-4 rounded-full">
										{item}
								</li>
								</a>
							))
						}
					</ul>
				</nav>
		)
	}

  return (
	  <div className="shadow-sm shadow-[#4A1807] bg-gradient-to-b from-[#EC9F05] to-[#D76A03] text-[#FFFBEC] p-8 flex justify-around">
	  	{logo()}
		{menu()}
	  </div>
  )
}

export default Navbar
