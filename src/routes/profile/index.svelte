<section>
	<aside>
		<nav>
			<div class="nav-header">
				<figure>
					<img src="http://placehold.it/140x100" alt="" />
				</figure>
			</div>
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
				<li>Item 4</li>
				<li>Item 5</li>
				<li>Item 6</li>
			</ul>
		</nav>
	</aside>
	<header><h3>Header Centered</h3></header>
	<div id="render-child">
		<p>
			loren Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus quaerat
			quisquam animi, recusandae amet error, adipisci assumenda pariatur dolor, exercitationem magni
			doloribus placeat incidunt est inventore vero voluptatem qui ullam?
		</p>
	</div>
</section>

<style>
	aside {
		background: rgb(2, 0, 36);
		background: linear-gradient(
			90deg,
			rgba(2, 0, 36, 1) 1%,
			rgba(16, 16, 130, 1) 99%,
			rgba(11, 15, 240, 1) 100%,
			rgb(38, 0, 255) 100%,
			rgba(22, 126, 147, 1) 100%
		);
		height: 100%;
        color:gold;
		left: 0;
        font-weight: bold;
		position: fixed;
		top: 0;
		width: 250px;
	}
	ul {
		list-style: none;
        padding:15px
	}
li{
    margin: 2px;
    height: 40px;
    transition: width 2s;
}
li:hover{
    color:cyan;
    background-color: navy;
    cursor: pointer;
    width: 200px;
    text-align: center;
}
	header {
		background: #ff0;
		height: 60px;
		left: 250px;
		right: 0;
		position: fixed;
		text-align: center;

		top: 0;
		z-index: 99;
	}
	figure {
		margin: 0;
	}
	img {
		height: 60px;
		width: 100%;
	}
	#render-child {
		background: #4699b4;
		height: 100%;
		margin-top: 58px;
		left: 250px;
		right: 0px;
		padding: 10px;
		position: fixed;
	}
	.container {
		left: 0;
		right: 0;
		margin-left: 250px;
		min-height: 100%;
		padding-left: 0px;
		height: 100%;
		position: relative;
	}
</style>
