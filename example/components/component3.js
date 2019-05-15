define(function(){
	return {
		props:["data"],
        template:`
        <div style='border:1px solid red;padding:10px;'>
            <h1>路径：{{data.component}}</h1>
            数据：{{JSON.stringify(data)}}
            <p>来自组件3的html</p>
        </div>
        `
	}
});